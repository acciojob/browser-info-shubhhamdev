//your JS code here. If required.
// Get the div element with the id "browser-info"
const browserInfoDiv = document.getElementById("browser-info");

// Function to get the browser name and version
function getBrowserInfo() {
	// Get the user agent string
	const userAgent = navigator.userAgent;

	// Check for various browsers and versions using regular expressions
	let browserName = "Unknown";
	let version = "Unknown";

	if (userAgent.match(/(edge|edgios|edga|edg)/i)) {
		browserName = "Microsoft Edge";
	} else if (userAgent.match(/chrome/i)) {
		browserName = "Google Chrome";
	} else if (userAgent.match(/firefox|fxios/i)) {
		browserName = "Mozilla Firefox";
	} else if (userAgent.match(/safari/i)) {
		browserName = "Safari";
	} else if (userAgent.match(/opr/i) || userAgent.match(/opera/i)) {
		browserName = "Opera";
	}

	// Get the version number from the user agent string
	version = userAgent.match(/(?:edge|chrome|safari|firefox|opr)[\s/](\d+(\.?_?\d+)+)/i);
	version = version ? version[1] : "Unknown";

	return { browserName, version };
}

// Call the function to get browser information
const { browserName, version } = getBrowserInfo();

// Display the information in the div
browserInfoDiv.textContent = "You are using " + browserName + " version " + version;
