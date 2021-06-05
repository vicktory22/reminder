export function registrationUrl(
  applicationId: string,
  guildId: string,
): string {
  return `https://discord.com/api/v8/applications/${applicationId}/guilds/${guildId}/commands`;
}
