import fetch from "node-fetch";
import { User } from "..";
import { Client } from "../../base";
import { BASE_URL, HTTPError } from "../../shared";
import { UserData } from "../../types/classes/user";

**
 * User representing the client on Twitch.
 * @class
 * @extends {User}
 */
class ClientUser extends User {
    public readonly client;

    /**
     * Creates a new user.
     * @param {Client} client Client that instantiated this user.
     * @param {UserData} data User's data.
     */
    constructor(client: Client, data: UserData) {
        super(client, data);

        /**
         * Client that instantiated this user.
         * @type {Client}
         * @readonly
         */
        this.client = client;
    }

    /**
     * Updates the description of this user.
     * @param {string} description New description.
     */
    public async setDescription(description: string) {
        const response = await fetch(`${BASE_URL}/users?description=${encodeURIComponent(description)}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${this.client.token}`,
                "client-id": this.client.options.clientId,
            },
        });

        if (!response.ok) {
            if (!this.client.options.suppressRejections) throw new HTTPError(response.statusText);

            return false;
        }

        const data: UserData = (await response.json()).data[0];

        this.data = data;

        return true;
    }
}

export default ClientUser;
