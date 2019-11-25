const core = require("@actions/core");
const surge = require("surge");

try {
	const { ref, ref_type } = require(process.env.GITHUB_EVENT_PATH);

	if (ref_type === 'branch') {
		const template = core.getInput('template');
		const domain = template.replace(/\$BRANCH/ig, ref);

		process.env.SURGE_LOGIN = core.getInput("login");
		process.env.SURGE_TOKEN = core.getInput("token");

		surge({ default: "teardown" })([domain]);
	}
} catch (error) {
	core.warning(error);
}
