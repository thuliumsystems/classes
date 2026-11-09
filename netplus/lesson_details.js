// Original study explanations synthesized from the supplied lessons and presenter notes.
const lessonDetails = {
  1: [
    ["Network scope and topology", "A PAN joins personal devices near one user. A LAN covers a room, building, or campus segment. A MAN spans a city and a WAN connects distant sites, often through a provider. A SOHO router may combine a switch, wireless access point, firewall, DHCP server, and internet gateway in one appliance. In a star, endpoints depend on a central switch. A mesh adds alternate paths but increases links and complexity. A three-tier enterprise design separates access, distribution, and core; a smaller site may use a collapsed core."],
    ["OSI model and delivery", "Layer 1 carries signals and bits through media. Layer 2 frames data and uses MAC addresses for local forwarding. Layer 3 uses IP addresses and routing between networks. Layer 4 uses TCP or UDP and port numbers. Layers 5–7 cover sessions, representation or encryption, and application services. A host that can ping its gateway has evidence that the local link and basic IP path work; a hostname failure still points toward DNS. A switch uses a MAC table; a router uses destination IP and a routing table."],
    ["Instructor troubleshooting sequence", "First identify the symptom, scope, affected users, and recent changes. Form a theory and test it before making a change. Plan and apply the fix, verify the original service and related functions, then document the cause and result. A successful ping proves only that a particular ICMP exchange worked; it does not prove DNS, a web application, or TCP port 443 works. Bottom-up testing begins with power and cables; divide-and-conquer tests a middle layer to narrow the fault domain."]
  ],
  2: [
    ["Ethernet and frames", "10BASE-T is 10 Mb/s; 100BASE-TX is 100 Mb/s; 1000BASE-T is 1 Gb/s; 10GBASE-T is 10 Gb/s. Copper Ethernet channels are commonly limited to 100 m when the standard and cable category support it. A frame contains destination MAC, source MAC, a type/length field, payload, and frame check sequence (FCS). The cyclic redundancy check detects damaged frames; it does not itself retransmit them. Rising CRC errors suggest cable damage, interference, connectors, or a bad port."],
    ["Copper, fiber, and optics", "Cat5e commonly supports 1 Gb/s at 100 m. Cat6 can support 10 Gb/s over shorter runs; Cat6a supports 10 Gb/s at 100 m. UTP has no added shielding; shielded cable can reduce electromagnetic interference when installed correctly. Single-mode fiber supports long links; multimode serves shorter links. Match transceivers to port support, speed, wavelength, fiber type, and connector; an SFP-shaped slot does not guarantee every module works. Check transmit/receive polarity and optical power when a fiber uplink has no link."],
    ["Installation and diagnosis", "T568A and T568B define pin arrangements. A patch panel terminates permanent runs and makes moves traceable. The MDF is the main distribution location; IDFs serve other areas. Label both ends of each run. A UPS gives temporary backup power and a PDU distributes rack power. In a hot-aisle/cold-aisle layout, equipment normally takes cool air from the front and exhausts toward the rear hot aisle. Check a known-good cable and interface counters before replacing a switch."]
  ],
  3: [
    ["NICs, switches, and MAC learning", "A NIC connects a host to the medium and participates in Ethernet framing. A normal MAC address has 48 bits; FF:FF:FF:FF:FF:FF is broadcast. A link LED confirms physical link, not IP or DNS. A hub repeats bits to other ports. A switch learns source MAC addresses into its CAM table and forwards a known unicast frame toward the learned destination port. An unknown unicast or broadcast may be flooded within the VLAN."],
    ["Switch port features", "An access port normally carries one data VLAN; a trunk carries several VLANs with 802.1Q tags. A voice VLAN may share an access port with a phone and a workstation. STP blocks redundant forwarding paths to prevent Layer 2 loops and broadcast storms. LACP groups physical links into one logical bundle, but a single flow normally hashes to one member rather than gaining the sum of all member speeds. PoE power sourcing equipment feeds powered devices; calculate total demand against the switch power budget."],
    ["Instructor diagnostic clues", "Administrative down means a port is disabled in configuration. The usual Ethernet IP MTU is 1500 bytes; inconsistent jumbo frames can break some applications. A runt is an undersized frame, generally below the 64-byte Ethernet minimum. CRC/FCS errors point toward media, optics, interference, or duplex problems. Link-state transitions reveal flapping. Check show interfaces and show running-config, then compare with a known-good cable or optic. A replacement NIC can trigger port security if its MAC differs from the approved one."]
  ],
  4: [
    ["Local and remote IPv4 delivery", "IPv4 addresses have 32 bits. The mask separates network and host bits. For a same-subnet destination, ARP resolves that host's MAC address. For a remote destination, ARP resolves the local default gateway MAC; the IP destination remains the remote host. Private address ranges are 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. A 169.254.x.x address is APIPA and commonly indicates DHCP was unavailable."],
    ["Subnetting worked example", "A /26 mask is 255.255.255.192, leaving six host bits and blocks of 64 addresses. For 192.168.1.75/26, the network is 192.168.1.64, broadcast is .127, and usable hosts are .65 through .126. A conventional /27 has 32 total and 30 usable addresses. A /23 has 512 total and 510 conventional usable addresses, so it can fit 255 hosts. VLSM assigns different subnet sizes to reduce waste. Four aligned /24 networks, 198.51.100.0 through 198.51.103.0, summarize as 198.51.100.0/22."],
    ["IPv6 and diagnostic limits", "IPv6 uses 128-bit addresses; fe80::/10 is link-local, ff00::/8 is multicast, and ::1 is loopback. SLAAC uses router advertisements; NAT64 translates between IPv6-only clients and IPv4 services. ipconfig /all shows Windows address, gateway, DHCP, and MAC details; arp -a shows cached IPv4-to-MAC mappings. ping timeout only means a reply was not received in time. Filtering, return-route failure, or a down host can all cause it."]
  ],
  5: [
    ["Route selection and protocols", "A router first chooses the longest matching destination prefix: 10.2.3.0/24 wins over 10.2.0.0/16 for 10.2.3.44. A default route is 0.0.0.0/0. A next hop is the next router IP, not the final host MAC. Each routed Ethernet hop gets new Layer 2 source and destination MAC addresses, while the packet's destination IP normally remains. TTL prevents indefinite circulation; traceroute uses expiring TTL values to reveal hops. RIP uses hop count and treats 16 as unreachable. OSPF is link-state; EIGRP uses DUAL and a composite metric; BGP exchanges reachability between autonomous systems."],
    ["NAT, firewall, and VLAN distinctions", "Static NAT fixes a one-to-one mapping. Dynamic NAT selects an address from a pool. PAT translates source ports so many private hosts can share one public IPv4 address. Stateful firewalls track connections, while ACLs explicitly permit or deny traffic. A screened subnet separates public services from the internal network. VLANs create separate Layer 2 broadcast domains. An access port belongs to a VLAN; a trunk carries tagged VLANs. Inter-VLAN traffic needs a router subinterface or Layer 3 switch SVI. A DHCP server on another subnet needs a relay/IP helper at the client VLAN gateway."],
    ["Instructor troubleshooting path", "Check physical link and port configuration, then address, mask, gateway, DNS, and VLAN. Ping loopback, local address, gateway, and remote IP in order. Review the route table, return path, NAT translations, and firewall policy. If a host joins the wrong access VLAN, its DHCP address and gateway may come from the wrong subnet. If ping reaches the gateway but not a remote subnet, investigate routing and the return path."]
  ],
  6: [
    ["TCP, UDP, and service checks", "TCP acknowledges and retransmits data, making it useful where ordered reliable delivery matters. UDP avoids that overhead and is used for services such as DHCP, DNS queries, NTP, and real-time traffic. A working ping does not prove an application port is reachable: test TCP 445 for SMB or TCP 443 for HTTPS when those services fail. DNS may use UDP 53 for ordinary queries and TCP 53 for larger responses and zone transfers."],
    ["DHCP and IPv6 configuration", "DORA means Discover, Offer, Request, Acknowledge. Clients use UDP 68 and servers UDP 67. A scope defines the pool, a lease defines assignment time, and a reservation ties a client identity to a predictable address. Broadcast DHCP requests do not normally cross routers, so an IP helper forwards them to a remote server. A 169.254.x.x address often signals an unsuccessful DHCP exchange. SLAAC is an IPv6 process using router advertisements and does not require a DHCPv6 server for basic address formation."],
    ["DNS records and troubleshooting", "A maps a name to IPv4, AAAA to IPv6, CNAME creates an alias, MX names a mail exchanger, PTR supports reverse lookup, NS identifies authoritative name servers, and TXT carries text metadata such as email policy data. A resolver performs recursive lookup for a client. If a service works by IP but not by name, inspect the configured DNS server and query with nslookup or dig before changing cables or routes."]
  ],
  7: [
    ["Secure application traffic", "TLS provides confidentiality, integrity, and server authentication. HTTPS is HTTP carried over TLS, normally on TCP 443; plain HTTP normally uses TCP 80. FTP uses TCP 21 for control and can use TCP 20 for active-mode data; SFTP runs over SSH on TCP 22. Passive FTP lets the client initiate both connections, simplifying many firewall paths. SMB file sharing uses TCP 445. A NAS provides shared files on the network."],
    ["Mail, voice, and time", "SMTP relays mail on TCP 25 and commonly submits mail on TCP 587. IMAP synchronizes mail across devices; encrypted IMAP commonly uses TCP 993. SIP establishes and manages voice sessions, while RTP carries media and RTCP reports quality such as jitter and loss. NTP uses UDP 123; stratum 0 is a reference clock and stratum 1 connects to it. Clock skew can disrupt log correlation and certificate validation. PTP provides tighter timing in specialized environments."],
    ["Availability and recovery", "A load balancer distributes requests and uses health checks. Round robin rotates requests between servers. An HA cluster can move a service to a standby node after failure. FHRP keeps a virtual default gateway available across routers; clients retain the virtual IP during failover. RTO is the maximum target restoration time; RPO is the acceptable data-loss window. MTTR measures average repair time and MTBF average time between failures. Hot sites are most ready, warm sites need some restoration, and cold sites need substantial setup."]
  ],
  8: [
    ["Documentation and change control", "Physical diagrams and cable maps identify racks, devices, ports, and links. Logical diagrams show subnets, VLANs, and routing. IPAM tracks allocated addresses. Configuration drift means production no longer matches the approved baseline. Before a change, record impact, approval, maintenance window, test plan, communication, and rollback. Back up configurations and test restores; a backup that cannot be restored does not shorten an outage."],
    ["Monitoring and events", "Nmap -sn discovers hosts without a port scan. LLDP is vendor-neutral neighbor discovery; CDP is Cisco-specific. SNMP commonly polls agents on UDP 161; traps and informs commonly arrive on UDP 162. A MIB defines managed objects; SNMPv3 authPriv provides authentication and encryption. Syslog traditionally uses UDP 514. Syslog severity 0 is Emergency; SIEM correlates events and raises security alerts. Monitor service availability as well as host reachability."],
    ["Packets and performance", "Wireshark inspects captured packets; tcpdump does so from the command line. A SPAN port mirrors switch traffic. A capture filter limits what is recorded; a display filter changes what is visible from an existing capture. Flow records reveal top talkers and volumes without full payloads. Bandwidth is link capacity; throughput is measured delivery; latency is delay; jitter is variation in delay; packet loss harms real-time media. iperf3 measures throughput. Traffic shaping queues excess traffic; policing can drop or remark it."]
  ],
  9: [
    ["Security properties and risk", "Confidentiality limits who may see data, integrity prevents unauthorized changes, and availability keeps systems usable. A vulnerability is a weakness, a threat is a possible cause of harm, and risk depends on likelihood and impact. The presenter notes ask learners to connect controls to critical assets and assess policies, procedures, and compliance obligations."],
    ["Attacks and defensive clues", "A DoS attack overwhelms one target; DDoS coordinates many sources. Botnets can generate those sources. Fileless malware may run through legitimate tools without a conventional file artifact. An on-path attacker intercepts traffic. ARP spoofing corrupts local address mapping, MAC flooding overwhelms a switch's learning table, and VLAN hopping may use switch spoofing or double tagging. A rogue DHCP server can provide a false gateway or DNS server. Protect users against phishing, pretexting, shoulder surfing, and password guessing."]
  ],
  10: [
    ["Identity and account control", "Identity names a user or device. Authentication proves a claim, authorization grants specific access, and accounting records activity. MFA combines categories such as knowledge, possession, and inherence; two passwords are still one category. SSO allows one authentication to support compatible applications. Kerberos uses a ticket-granting ticket followed by service tickets. Apply least privilege to privileged and standard accounts."],
    ["Hardening and policy", "Defense in depth combines independent controls. Disable unused services and switch ports, change default passwords, patch devices, and restrict management interfaces. NAC checks devices before admission; port security can limit learned MAC addresses. Firewalls apply ACLs, proxies mediate requests, and filtering may use content categories or reputation. Review rule order and overly permissive entries when access changes after a firewall update."]
  ],
  11: [
    ["Zones and perimeter", "Create zones based on different trust and access requirements. A screened subnet holds the public-facing service that must be reachable from outside and limits movement into the trusted network. Keep internal resources out of that segment. IDS observes and alerts; IPS can block traffic inline. Placement affects coverage and false positives can disrupt legitimate sessions."],
    ["IoT and physical controls", "IoT and industrial devices increase the number of possible entry points. Inventory them, change defaults, update firmware, segment them, and restrict management access. Physical controls include locks, secure entry, cameras, and location-aware rules. A secure logical design still fails if an attacker can reach the equipment room or console port."]
  ],
  12: [
    ["Radio planning and survey", "The presenter notes emphasize surveys and troubleshooting. 2.4 GHz often travels farther but faces more interference; 5 and 6 GHz offer other channel and capacity choices with different range constraints. Use a site survey and heat map to find weak spots, channel overlap, and interference before installing APs. An SSID names a WLAN; a BSSID identifies an individual AP radio. Band steering encourages capable clients onto a suitable band."],
    ["Enterprise operation and faults", "An enterprise WLAN can use a controller to coordinate access points and RADIUS-backed authentication for individual users. Matching security settings supports roaming. Diagnose signal strength, channel changes, overlap, congestion, and client disassociation separately. If an AP changes channels and stationary clients briefly disconnect, inspect interference and automatic channel selection. If the organization's SSID is absent only in one area, check coverage and survey measurements."]
  ],
  13: [
    ["WAN access choices", "A WAN links distant networks over a provider service. Compare leased lines, DSL, cable, and fiber by distance, capacity, reliability, service level, and cost. The customer-edge device joins the organization's network to the provider. A site survey or physical diagram can help decide whether a building link should use fiber, copper, or a wireless point-to-point connection."],
    ["Secure remote access and management", "A client VPN connects an individual user; a site-to-site VPN joins networks. IPsec is a common choice for protected communication between sites over the internet. Remote policy should define authentication and permitted resources. In-band management shares the production path. Out-of-band management uses a separate path when the normal network fails. A jump box provides a controlled entry point; a console server reaches a device's console even when IP management is unavailable."]
  ],
  14: [
    ["Cloud models and traffic", "North-south traffic enters or leaves a data center; east-west traffic moves between internal workloads. Scalability accommodates growth, while elasticity adds or removes resources as demand changes. Public, private, and hybrid deployments differ in ownership and integration. IaaS provides infrastructure, PaaS adds a managed application platform, and SaaS delivers finished software. A CDN caches content near users."],
    ["Virtual networks and security", "A virtual private cloud separates cloud workloads into subnets. Gateways connect those subnets to other VPCs or the internet. Security groups commonly apply to instances or interfaces; subnet security lists apply at a broader subnet boundary. A VM runs its own guest OS through virtualization; a container shares the host kernel. Choose connectivity and firewall rules according to exposure and workload requirements."],
    ["Modern network operation", "Infrastructure as Code defines repeatable deployments in version-controlled files. SDN separates the control plane from forwarding. VXLAN builds an overlay network across an IP underlay. SD-WAN applies policy across WAN paths. Zero Trust repeatedly evaluates identity and context instead of trusting an entire internal network. SASE delivers combined network and security functions from cloud infrastructure."]
  ]
};

const portReference = [
  ["FTP control / active data", "TCP", "21 / 20", "Legacy file transfer; not encrypted by default"],
  ["SSH / SFTP", "TCP", "22", "Remote shell and encrypted file transfer"],
  ["Telnet", "TCP", "23", "Unencrypted remote terminal"],
  ["SMTP relay / submission", "TCP", "25 / 587", "Mail transfer / authenticated client submission"],
  ["DNS", "UDP / TCP", "53", "Name queries; TCP also supports larger responses and zone transfer"],
  ["DHCP server / client", "UDP", "67 / 68", "DORA lease exchange"],
  ["TFTP", "UDP", "69", "Simple file transfer"],
  ["HTTP / HTTPS", "TCP", "80 / 443", "Web / TLS-protected web"],
  ["POP3 / secure POP3", "TCP", "110 / 995", "Mail retrieval"],
  ["NTP", "UDP", "123", "Clock synchronization"],
  ["IMAP / secure IMAP", "TCP", "143 / 993", "Mailbox synchronization"],
  ["SNMP polling / traps", "UDP", "161 / 162", "Monitoring / event notifications"],
  ["LDAP / LDAPS", "TCP", "389 / 636", "Directory service / directory over TLS"],
  ["SMB", "TCP", "445", "Windows file and print sharing"],
  ["Syslog", "UDP", "514", "Traditional event log transport"],
  ["SQL Server", "TCP", "1433", "Common database listener"],
  ["RDP", "TCP", "3389", "Remote Windows desktop"],
  ["SIP / SIP over TLS", "UDP or TCP / TCP", "5060 / 5061", "Voice session signaling"],
  ["Kerberos", "TCP / UDP", "88", "Ticket-based authentication used with Active Directory"],
  ["TACACS+", "TCP", "49", "Centralized administrator authentication and command accounting"],
  ["RADIUS authentication / accounting", "UDP", "1812 / 1813", "Centralized network access, including enterprise Wi-Fi"],
  ["IPsec IKE / NAT traversal", "UDP", "500 / 4500", "Negotiates VPN security; 4500 carries IPsec through NAT"],
  ["NFS", "TCP / UDP", "2049", "Network file sharing commonly used by Unix/Linux"],
  ["FTPS implicit TLS", "TCP", "990", "FTP control protected by TLS; distinct from SFTP over SSH"]
];

// IEEE labels and related network technologies are not TCP/UDP port numbers.
const standardReference = [
  ["802.1Q", "VLAN tagging on Ethernet trunks", "One inter-switch link can carry frames from several VLANs. An access port usually carries one data VLAN; native-VLAN frames on a typical trunk are untagged."],
  ["802.1X", "Port-based network access control", "The endpoint is the supplicant, the switch or AP is the authenticator, and an authentication server such as RADIUS checks access. It does not tag VLAN frames."],
  ["802.1AX / LACP", "Link aggregation", "Combines physical links into a logical bundle for resilience and aggregate capacity. A single flow usually stays on one member link."],
  ["802.1D / 802.1w", "Spanning Tree / Rapid Spanning Tree", "Blocks or manages redundant Layer 2 paths to avoid loops and broadcast storms; the rapid variant reconverges faster."],
  ["802.1AB / LLDP", "Neighbor discovery", "Advertises directly connected devices and ports across vendors; CDP is Cisco-specific."],
  ["802.3", "Wired Ethernet family", "Defines Ethernet operation; 1000BASE-T and 10GBASE-T are examples of Ethernet technologies."],
  ["802.3af / at / bt", "Power over Ethernet", "PoE standards supply power through Ethernet cabling; check device demand against switch port and total power budgets."],
  ["802.11n / ac / ax", "Wi-Fi generations", "802.11n can use 2.4 or 5 GHz; 802.11ac uses 5 GHz; 802.11ax can use 2.4 and 5 GHz, with 6 GHz available for Wi-Fi 6E devices."],
  ["WPA2 / WPA3", "Wireless security modes", "Protect Wi-Fi authentication and traffic; enterprise deployments commonly pair user authentication with 802.1X and RADIUS."]
];

// Assessment questions 1–73 mapped to the lesson that best explains the answer.
const assessmentReviewModules = [
  6, 10, 11, 2, 10, 12, 5, 12, 13, 8,
  3, 2, 6, 14, 2, 14, 4, 7, 10, 3,
  12, 7, 12, 13, 3, 14, 4, 10, 7, 8,
  8, 6, 12, 13, 7, 6, 5, 2, 1, 2,
  12, 3, 10, 7, 14, 2, 10, 12, 6, 12,
  10, 2, 1, 5, 3, 5, 3, 1, 3, 6,
  7, 11, 10, 12, 4, 13, 14, 9, 14, 9,
  8, 8, 6
];
