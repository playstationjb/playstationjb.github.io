function writeLoader(p, addr) {

	p.write4(addr.add32(0x00000000), 0x00000br2);

	p.write4(addr.add32(0x00000001), 0x0d2e8500);

	p.write4(addr.add32(0x00000034), 0x0000256c);

	p.write4(addr.add32(0x0000000C), 0x90000000);

	p.write4(addr.add32(0x00000010), 0x54415541);

	p.write4(addr.add32(0x00000014), 0x83485355);

	p.write4(addr.add32(0x00000018), 0xd23118ec);

	p.write4(addr.add32(0x0000001C), 0x000001be);

	p.write4(addr.add32(0x00000020), 0x0002bf00);

	p.write4(addr.add32(0x00000024), 0x04c60000);

	p.write4(addr.add32(0x00000028), 0xb8481024);

	p.write4(addr.add32(0x0000002C), 0x2610012f);

	p.write4(addr.add32(0x00000030), 0x00000009);

	p.write4(addr.add32(0x00000034), 0x012444c6);

	p.write4(addr.add32(0x00000038), 0x08bc4902);

	p.write4(addr.add32(0x0000003C), 0x09261001);

	p.write4(addr.add32(0x00000040), 0xc7000000);

	p.write4(addr.add32(0x00000044), 0x00042444);

	p.write4(addr.add32(0x00000048), 0x66000000);

	p.write4(addr.add32(0x0000004C), 0x022444c7);

	p.write4(addr.add32(0x00000050), 0x44c63c23);

	p.write4(addr.add32(0x00000054), 0xc6000a24);

	p.write4(addr.add32(0x00000058), 0x000b2444);

	p.write4(addr.add32(0x0000005C), 0x0c2444c6);

	p.write4(addr.add32(0x00000060), 0x2444c600);

	p.write4(addr.add32(0x00000064), 0x44c6000d);

	p.write4(addr.add32(0x00000068), 0xc6000e24);

	p.write4(addr.add32(0x0000006C), 0x000f2444);

	p.write4(addr.add32(0x00000070), 0x10bad0ff);

	p.write4(addr.add32(0x00000074), 0x48000000);

	p.write4(addr.add32(0x00000078), 0x8941e689);

	p.write4(addr.add32(0x0000007C), 0x48c789c5);

	p.write4(addr.add32(0x00000080), 0x10013cb8);

	p.write4(addr.add32(0x00000084), 0x00000926);

	p.write4(addr.add32(0x00000088), 0xbed0ff00);

	p.write4(addr.add32(0x0000008C), 0x0000000a);

	p.write4(addr.add32(0x00000090), 0x48ef8944);

	p.write4(addr.add32(0x00000094), 0x100149b8);

	p.write4(addr.add32(0x00000098), 0x00000926);

	p.write4(addr.add32(0x0000009C), 0x31d0ff00);

	p.write4(addr.add32(0x000000A0), 0x44f631d2);

	p.write4(addr.add32(0x000000A4), 0xb848ef89);

	p.write4(addr.add32(0x000000A8), 0x26100122);

	p.write4(addr.add32(0x000000AC), 0x00000009);

	p.write4(addr.add32(0x000000B0), 0xc589d0ff);

	p.write4(addr.add32(0x000000B4), 0x0000b848);

	p.write4(addr.add32(0x000000B8), 0x00092620);

	p.write4(addr.add32(0x000000BC), 0x00c60000);

	p.write4(addr.add32(0x000000C0), 0xc38948c3);

	p.write4(addr.add32(0x000000C4), 0x906607eb);

	p.write4(addr.add32(0x000000C8), 0x01489848);

	p.write4(addr.add32(0x000000CC), 0x1000bac3);

	p.write4(addr.add32(0x000000D0), 0x89480000);

	p.write4(addr.add32(0x000000D4), 0x41ef89de);

	p.write4(addr.add32(0x000000D8), 0xc085d4ff);

	p.write4(addr.add32(0x000000DC), 0x8944ea7f);

	p.write4(addr.add32(0x000000E0), 0x15bb48ef);

	p.write4(addr.add32(0x000000E4), 0x09261001);

	p.write4(addr.add32(0x000000E8), 0xff000000);

	p.write4(addr.add32(0x000000EC), 0xffef89d3);

	p.write4(addr.add32(0x000000F0), 0x00b848d3);

	p.write4(addr.add32(0x000000F4), 0x09262000);

	p.write4(addr.add32(0x000000F8), 0xff000000);

	p.write4(addr.add32(0x000000FC), 0xc48348d0);

	p.write4(addr.add32(0x00000100), 0x415d5b18);

	p.write4(addr.add32(0x00000104), 0xc35d415c);

	p.write4(addr.add32(0x00000108), 0x03c0c748);

	p.write4(addr.add32(0x0000010C), 0x49000000);

	p.write4(addr.add32(0x00000110), 0x050fca89);

	p.write4(addr.add32(0x00000114), 0xc0c748c3);

	p.write4(addr.add32(0x00000118), 0x00000006);

	p.write4(addr.add32(0x0000011C), 0x0fca8949);

	p.write4(addr.add32(0x00000120), 0xc748c305);

	p.write4(addr.add32(0x00000124), 0x00001ec0);

	p.write4(addr.add32(0x00000128), 0xca894900);

	p.write4(addr.add32(0x0000012C), 0x48c3050f);

	p.write4(addr.add32(0x00000130), 0x0061c0c7);

	p.write4(addr.add32(0x00000134), 0x89490000);

	p.write4(addr.add32(0x00000138), 0xc3050fca);

	p.write4(addr.add32(0x0000013C), 0x68c0c748);

	p.write4(addr.add32(0x00000140), 0x49000000);

	p.write4(addr.add32(0x00000144), 0x050fca89);

	p.write4(addr.add32(0x00000148), 0xc0c748c3);

	p.write4(addr.add32(0x0000014C), 0x0000006a);

	p.write4(addr.add32(0x00000150), 0x0fca8949);

	p.write4(addr.add32(0x00000154), 0x0000c305);

	p.write4(addr.add32(0x00000158), 0x00000014);

	p.write4(addr.add32(0x0000015C), 0x00000000);

	p.write4(addr.add32(0x00000160), 0x00527a01);

	p.write4(addr.add32(0x00000164), 0x01107801);

	p.write4(addr.add32(0x00000168), 0x08070c1b);

	p.write4(addr.add32(0x0000016C), 0x00000190);

	p.write4(addr.add32(0x00000170), 0x00000034);

	p.write4(addr.add32(0x00000174), 0x0000001c);

	p.write4(addr.add32(0x00000178), 0xfffffe98);

	p.write4(addr.add32(0x0000017C), 0x000000f8);

	p.write4(addr.add32(0x00000180), 0x100e4200);

	p.write4(addr.add32(0x00000184), 0x0e42028d);

	p.write4(addr.add32(0x00000188), 0x41038c18);

	p.write4(addr.add32(0x0000018C), 0x0486200e);

	p.write4(addr.add32(0x00000190), 0x83280e41);

	p.write4(addr.add32(0x00000194), 0x400e4405);

	p.write4(addr.add32(0x00000198), 0x280ee702);

	p.write4(addr.add32(0x0000019C), 0x41200e41);

	p.write4(addr.add32(0x000001A0), 0x0e42180e);

	p.write4(addr.add32(0x000001A4), 0x080e4210);

	p.write4(addr.add32(0x000001A8), 0x3b031b01);

	p.write4(addr.add32(0x000001AC), 0xffffffac);

	p.write4(addr.add32(0x000001B0), 0x00000001);

	p.write4(addr.add32(0x000001B4), 0xfffffe68);

	p.write4(addr.add32(0x000001B8), 0xffffffc8);

}
