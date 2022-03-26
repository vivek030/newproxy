function FindProxyForURL(url, host) {
	
	isInNet(dnsResolve(host), "104.16.154.36", "255.255.255.255") {
		return "SOCKS 10.6.6.1:1080";
	}
	return "DIRECT";
}
