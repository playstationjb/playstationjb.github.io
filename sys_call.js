/* Holds system call wrapper offsets for user's specific firmware */

window.syscalls = [];

window.memcalls = [];



/* These are the offsets in libkernel for system call wrappers */

window.syscallMap =

{

  '5.01':

  {

    3: 0x67F1,

    4: 0x2730,

    5: 0x2570,

    6: 0x24D0,

    20: 0x06F0,

    23: 0x0710,

    24: 0x0730,

    54: 0x0970, // Heap spray via sys_ioctl

    97: 0x0B70,

    98: 0x24F0,

    203: 0x1030, // Prefaulting

    477: 0x27B0, // sys_mmap

    557: 0x1AF0, // Kernel Exploit Free P1 "sys_namedobj_create"

    558: 0x1B10, // Kernel Exploit Free P3 "sys_namedobj_delete"

    601: 0x1E70, // Kernel Exploit Free P2 "sys_mdbg_service",

    632: 0x21D0, // Kernel Exploit Leak P1 "sys_thr_suspend_ucontext"

    633: 0x21F0, // Kernel Exploit Leak P3 "sys_thr_resume_ucontext"

    634: 0x2210, // Kernel Exploit Leak P2 "sys_thr_get_ucontext"

  }

}



/* A long ass map of system call names -> number, you shouldn't need to touch this */

window.syscallnames =

{

	"sys_exit": 1,

	"sys_fork": 2,

	"sys_read": 3,

	"sys_write": 4,

	"sys_open": 5,

	"sys_close": 6,

	"sys_wait4": 7,

	"sys_unlink": 10,

	"sys_chdir": 12,

	"sys_chmod": 15,

	"sys_getpid": 20,

	"sys_setuid": 23,

	"sys_getuid": 24,

	"sys_geteuid": 25,

	"sys_recvmsg": 27,

	"sys_sendmsg": 28,

	"sys_recvfrom": 29,

	"sys_accept": 30,

	"sys_getpeername": 31,

	"sys_getsockname": 32,

	"sys_access": 33,

	"sys_chflags": 34,

	"sys_fchflags": 35,

	"sys_sync": 36,

	"sys_kill": 37,

	"sys_stat": 38,

	"sys_getppid": 39,

	"sys_dup": 41,

	"sys_pipe": 42,

	"sys_getegid": 43,

	"sys_profil": 44,

	"sys_getgid": 47,

	"sys_getlogin": 49,

	"sys_setlogin": 50,

	"sys_sigaltstack": 53,

	"sys_ioctl": 54,

	"sys_reboot": 55,

	"sys_revoke": 56,

	"sys_execve": 59,

	"sys_msync": 65,

	"sys_munmap": 73,

	"sys_mprotect": 74,

	"sys_madvise": 75,

	"sys_mincore": 78,

	"sys_getgroups": 79,

	"sys_setgroups": 80,

	"sys_setitimer": 83,

	"sys_getitimer": 86,

	"sys_getdtablesize": 89,

	"sys_dup2": 90,

	"sys_fcntl": 92,

	"sys_select": 93,

	"sys_fsync": 95,

	"sys_setpriority": 96,

	"sys_socket": 97,

	"sys_connect": 98,

	"sys_getpriority": 100,

	"sys_send": 101,

	"sys_recv": 102,

	"sys_bind": 104,

	"sys_setsockopt": 105,

	"sys_listen": 106,

	"sys_recvmsg": 113,

	"sys_sendmsg": 114,

	"sys_gettimeofday": 116,

	"sys_getrusage": 117,

	"sys_getsockopt": 118,

	"sys_readv": 120,

	"sys_writev": 121,

	"sys_settimeofday": 122,

	"sys_fchmod": 124,

	"sys_recvfrom": 125,

	"sys_setreuid": 126,

	"sys_setregid": 127,

	"sys_rename": 128,

	"sys_flock": 131,

	"sys_sendto": 133,

	"sys_shutdown": 134,

	"sys_socketpair": 135,

	"sys_mkdir": 136,

	"sys_rmdir": 137,

	"sys_utimes": 138,

	"sys_adjtime": 140,

	"sys_getpeername": 141,

	"sys_setsid": 147,

	"sys_sysarch": 165,

	"sys_setegid": 182,

	"sys_seteuid": 183,

	"sys_fstat": 189,

	"sys_lstat": 190,

	"sys_pathconf": 191,

	"sys_fpathconf": 192,

	"sys_getrlimit": 194,

	"sys_setrlimit": 195,

	"sys_getdirentries": 196,

	"sys___sysctl": 202,

	"sys_mlock": 203,

	"sys_munlock": 204,

	"sys_futimes": 206,

	"sys_poll": 209,

	"sys_clock_gettime": 232,

	"sys_clock_settime": 233,

	"sys_clock_getres": 234,

	"sys_ktimer_create": 235,

	"sys_ktimer_delete": 236,

	"sys_ktimer_settime": 237,

	"sys_ktimer_gettime": 238,

	"sys_ktimer_getoverrun": 239,

	"sys_nanosleep": 240,

	"sys_rfork": 251,

	"sys_issetugid": 253,

	"sys_getdents": 272,

	"sys_preadv": 289,

	"sys_pwritev": 290,

	"sys_getsid": 310,

	"sys_aio_suspend": 315,

	"sys_mlockall": 324,

	"sys_munlockall": 325,

	"sys_sched_setparam": 327,

	"sys_sched_getparam": 328,

	"sys_sched_setscheduler": 329,

	"sys_sched_getscheduler": 330,

	"sys_sched_yield": 331,

	"sys_sched_get_priority_max": 332,

	"sys_sched_get_priority_min": 333,

	"sys_sched_rr_get_interval": 334,

	"sys_utrace": 335,

	"sys_sigprocmask": 340,

	"sys_sigprocmask": 340,

	"sys_sigsuspend": 341,

	"sys_sigpending": 343,

	"sys_sigtimedwait": 345,

	"sys_sigwaitinfo": 346,

	"sys_kqueue": 362,

	"sys_kevent": 363,

	"sys_uuidgen": 392,

	"sys_sendfile": 393,

	"sys_fstatfs": 397,

	"sys_ksem_close": 400,

	"sys_ksem_post": 401,

	"sys_ksem_wait": 402,

	"sys_ksem_trywait": 403,

	"sys_ksem_init": 404,

	"sys_ksem_open": 405,

	"sys_ksem_unlink": 406,

	"sys_ksem_getvalue": 407,

	"sys_ksem_destroy": 408,

	"sys_sigaction": 416,

	"sys_sigreturn": 417,

	"sys_getcontext": 421,

	"sys_setcontext": 422,

	"sys_swapcontext": 423,

	"sys_sigwait": 429,

	"sys_thr_create": 430,

	"sys_thr_exit": 431,

	"sys_thr_self": 432,

	"sys_thr_kill": 433,

	"sys_ksem_timedwait": 441,

	"sys_thr_suspend": 442,

	"sys_thr_wake": 443,

	"sys_kldunloadf": 444,

	"sys__umtx_op": 454,

	"sys__umtx_op": 454,

	"sys_thr_new": 455,

	"sys_sigqueue": 456,

	"sys_thr_set_name": 464,

	"sys_rtprio_thread": 466,

	"sys_pread": 475,

	"sys_pwrite": 476,

	"sys_mmap": 477,

	"sys_lseek": 478,

	"sys_truncate": 479,

	"sys_ftruncate": 480,

	"sys_thr_kill2": 481,

	"sys_shm_open": 482,

	"sys_shm_unlink": 483,

	"sys_cpuset_getid": 486,

	"sys_cpuset_getaffinity": 487,

	"sys_cpuset_setaffinity": 488,

	"sys_openat": 499,

	"sys_pselect": 522,



	"sys_regmgr_call": 532,

	"sys_jitshm_create": 533,

	"sys_jitshm_alias": 534,

	"sys_dl_get_list": 535,

	"sys_dl_get_info": 536,

	"sys_dl_notify_event": 537,

	"sys_evf_create": 538,

	"sys_evf_delete": 539,

	"sys_evf_open": 540,

	"sys_evf_close": 541,

	"sys_evf_wait": 542,

	"sys_evf_trywait": 543,

	"sys_evf_set": 544,

	"sys_evf_clear": 545,

	"sys_evf_cancel": 546,

	"sys_query_memory_protection": 47,

	"sys_batch_map": 548,

	"sys_osem_create": 549,

	"sys_osem_delete": 550,

	"sys_osem_open": 551,

	"sys_osem_close": 552,

	"sys_osem_wait": 553,

	"sys_osem_trywait": 554,

	"sys_osem_post": 555,

	"sys_osem_cancel": 556,

	"sys_namedobj_create": 557,

	"sys_namedobj_delete": 558,

	"sys_set_vm_container": 559,

	"sys_debug_init": 560,

	"sys_suspend_process": 561,

	"sys_resume_process": 562,

	"sys_opmc_enable": 563,

	"sys_opmc_disable": 564,

	"sys_opmc_set_ctl": 565,

	"sys_opmc_set_ctr": 566,

	"sys_opmc_get_ctr": 567,

	"sys_budget_create": 568,

	"sys_budget_delete": 569,

	"sys_budget_get": 570,

	"sys_budget_set": 571,

	"sys_virtual_query": 572,

	"sys_mdbg_call": 573,

	"sys_sblock_create": 574,

	"sys_sblock_delete": 575,

	"sys_sblock_enter": 576,

	"sys_sblock_exit": 577,

	"sys_sblock_xenter": 578,

	"sys_sblock_xexit": 579,

	"sys_eport_create": 580,

	"sys_eport_delete": 581,

	"sys_eport_trigger": 582,

	"sys_eport_open": 583,

	"sys_eport_close": 584,

	"sys_is_in_sandbox": 585,

	"sys_dmem_container": 586,

	"sys_get_authinfo": 587,

	"sys_mname": 588,

	"sys_dynlib_dlopen": 589,

	"sys_dynlib_dlclose": 590,

	"sys_dynlib_dlsym": 591,

	"sys_dynlib_get_list": 592,

	"sys_dynlib_get_info": 593,

	"sys_dynlib_load_prx": 594,

	"sys_dynlib_unload_prx": 595,

	"sys_dynlib_do_copy_relocations": 596,

	"sys_dynlib_prepare_dlclose": 597,

	"sys_dynlib_get_proc_param": 598,

	"sys_dynlib_process_needed_and_relocate": 599,

	"sys_sandbox_path": 600,

	"sys_mdbg_service": 601,

	"sys_randomized_path": 602,

	"sys_rdup": 603,

	"sys_dl_get_metadata": 604,

	"sys_workaround8849": 605,

	"sys_is_development_mode": 206,

	"sys_get_self_auth_info": 207,

	"sys_dynlib_get_info_ex": 208,

	"sys_budget_get_ptype": 210,

	"sys_budget_getid": 209,

	"sys_get_paging_stats_of_all_threads": 211,

	"sys_get_proc_type_info": 562,

	"sys_get_resident_count": 573,

	"sys_prepare_to_suspend_process": 614,

	"sys_get_resident_fmem_count": 615,

	"sys_thr_get_name": 616,

	"sys_set_gpo": 617,

	"sys_thr_suspend_ucontext": 632,

	"sys_thr_resume_ucontext": 633,

	"sys_thr_get_ucontext": 634

}
