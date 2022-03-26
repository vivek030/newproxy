function FindProxyForURL(url, host) {
	if isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") {
		return "SOCKS 10.6.6.1:1080";
	}
	return "DIRECT";
}
