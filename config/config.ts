import "https://deno.land/x/dotenv@v2.0.0/load.ts";

export const config = {
  applicationId: Deno.env.get("APPLICATION_ID"),
  guildId: Deno.env.get("GUILD_ID"),
  publicKey: Deno.env.get("PUBLIC_KEY"),
  botToken: Deno.env.get("BOT_TOKEN"),
  clientId: Deno.env.get("CLIENT_ID"),
};
