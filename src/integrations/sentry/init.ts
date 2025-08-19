import { env } from "@/env";
import * as Sentry from "@sentry/tanstackstart-react";

// initialize sentry
Sentry.init({
	dsn: env.VITE_SENTRY_DSN,
	// Setting this option to true will send default PII data to Sentry.
	// For example, automatic IP address collection on events
	sendDefaultPii: true,
});
