import fetch from "node-fetch";
import type { Client, EmoteData } from "../..";
import { Manager } from "../../base/internal";
import { BASE_URL, HTTPError, InternalError, MILLISECONDS, TwitchAPIError } from "../../shared/";
import Emote from "./Emote";

export default class EmoteManager extends Manager<Emote> {
    public constructor(public readonly client: Client) {
        super(client, {
            update: MILLISECONDS.HOUR,
            ttl: MILLISECONDS.DAY,
        });
    }

    public get(id: string) {
        return this.cache.get(id);
    }

    public async fetch(id: string) {
        if (!this.client.token) throw new InternalError("Token not available");

        const res = await fetch(`${BASE_URL}/chat/emotes/global`, {
            headers: {
                Authorization: `Bearer ${this.client.token}`,
                "Client-Id": this.client.options.clientId,
            },
        }).catch((e) => {
            throw new HTTPError(e);
        });

        if (res.ok) {
            const current = new Emote(
                this.client,
                (await res.json()).data.find((e: EmoteData) => e.id === id)
            );
            this.cache.set(current.name, current);

            return current;
        }

        if (!this.client.options.suppressRejections) throw new TwitchAPIError("unable to udpate emote");

        return;
    }
}
