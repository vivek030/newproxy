function FindProxyForURL(url, host) {
	if (shExpMatch(host, "proxyerror.sdm.network")) {
		return "DIRECT";
	}
	if (shExpMatch(host, "*.sdm.network")) {
		return "SOCKS 10.6.6.1:1080";
	}
	return "DIRECT";
}