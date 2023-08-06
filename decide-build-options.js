const shouldForceInstall = process.env.FORCE_INSTALL === "true";

if (shouldForceInstall) {
  console.log("Forcing installation...");
  process.exit(0);
}
