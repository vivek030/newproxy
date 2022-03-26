function FindProxyForURL(url, host) {
	if (shExpMatch(host, "proxyerror.sdm.network")) {
		return "DIRECT";
	}
	if (shExpMatch(host, "*10.6.6.1")) {
		return "SOCKS 10.6.6.1:1080";
	}
	return "DIRECT";
}
