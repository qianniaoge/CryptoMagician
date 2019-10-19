const data = {
    "app": "Crypto Magician",
    "file": "文件",
    "library": "支持库",
    "started": "开始",
    "support_mode": "支持的填充与模式",
    "padding": "填充",
    "symmetric_algorithm": "对称加密算法",
    "asymmetric_algorithm": "非对称加密算法",
    "other": "其他",
    "support_algorithms_abstract_table": "支持的算法摘要表",
    "support_block_cipher_mode_table": "支持的块密码模式表",
    "message_digest_algorithm": "消息摘要算法",
    "algorithm": "算法",
    "algorithm_select": "请选择算法",
    "stream_ciphers": "流密码",
    "block_ciphers": "块密码",
    "hmac": "HMAC",
    "output_text": "输出文本",
    "hmac_key": "HMAC 密匙",
    "plain_text": "源文本",
    "off": "OFF - 关闭",
    "on": "ON - 开启",
    "hex": "十六进制 - Hex",
    "dec": "十进制 - Dec",
    "base64": "Base64 - Base64 编码",
    "hex_and_base64": "Base64 + Hex - 两者",
    "hmac_is_disabled": "HMAC 没有开启",
    "please_input_hash": "请输入需要加密的文本",
    "please_input_hmac": "请输入 HMAC 密匙",
    "execute": "执行",
    "calculated_files": "计算文件",
    "reset": "重置",
    "result": "结果",
    "symmetric_key_algorithm": "对称密匙算法",
    "mode": "模式",
    "operate": "操作",
    "key": "密匙",
    "iv": "初始向量",
    "encoding": "编码",
    "cipher_text": "加密文本",
    "file_tips": "点击或拖动文件到此",
    "encryption": "加密 - Encrypt",
    "decryption": "解密 - Decrypt",
    "please_input_key": "请输入密匙",
    "ecb_not": "ECB 模式不需要初始化向量",
    "mode_not": "当前模式不需要初始化向量",
    "please_input_iv": "请输入初始化向量",
    "remove_file": "移出文件",
    "no_mode": "No Mode - 不使用模式",
    "ecb": "ECB - 电子密码本模式",
    "cbc": "CBC - 密码分组链接模式",
    "ofb": "OFB - 输出反馈模式",
    "cfb": "CFB - 密码反馈模式",
    "ctr": "CTR - 计算器模式",
    "gladman": "CTRGladman - Gladman 模式",
    "drop_bytes": "丢弃字节数",
    "drop_tips": "请输入需要丢弃的字节数.(默认 768)",
    "please_input_text_symmetric": "请输入加/解密的文本",
    "key_not_empty": "密匙不能为空",
    "plain_text_not_empty": "源文本不能为空",
    "iv_not_empty": "初始化向量不能为空",
    "file_base64": "文件的 Base64",
    "required_not_empty": "此项参数不能为空",
    "file_size_tips": "文件的大小不能超过",
    "no_file_selected": "没有选中的文件",
    "files_in": "个文件 耗时",
    "second": "秒",
    "rsa_keypair": "RSA-密匙对",
    "private_key_encrypt": "私匙加密",
    "private_key_decrypt": "私匙解密",
    "public_key_encrypt": "公匙加密",
    "public_key_decrypt": "公匙解密",
    "public_key": "公匙",
    "public_key_not_empty": "公匙不能为空",
    "private_key_not_empty": "私匙不能为空",
    "passphrase_not_empty": "密码不能为空",
    "please_input_public_key": "请输入公匙",
    "please_input_private_key": "请输入私匙",
    "private_key": "私匙",
    "generate_keypair": "生成密匙对",
    "utf8": "UTF8 - UTF8 编码",
    "result_text": "结果文本",
    "please_input_encrypt_text": "请输入你想要加密的文本",
    "please_input_decrypt_text": "请输入你想要解密的文本",
    "file_not_decrypt_tips": "文件的解密暂不支持",
    "private_key_type": "私匙",
    "public_key_type": "公匙",
    "passphrase": "密码",
    "passphrase_tips": "请输入你的私匙密码",
    "private_status": "私匙加密",
    "private_no_password": "这个私匙没有密码加密",
    "input_text": "输入文本",
    "radix_calculation": "进制计算",
    "yes_encrypted": "是的 - 加密了",
    "no_plain_text": "不是 - 没有加密",
    "rsa": "RSA",
    "keypair_tool": "密匙对工具",
    "this_public_only_support": "[警告] 此公匙的加/解密数据最大长度为 ",
    "your_data_bytes_is": " 字节. 但是你的数据为 ",
    "bytes": "字节",
    "private_key_null_tips": "错误: 密匙只支持PKCS1和PKCS8或检查你的密匙头信息",
    "keypair_title": "Crypto Magician - 密匙对工具",
    "settings_title": "Crypto Magician - 设置",
    "generate": "生成",
    "convert": "转换器",
    "private_extract_public": "私匙提取公匙",
    "keypair_check": "检查密匙对",
    "key_parser": "解析器",
    "extractor": "提取器",
    "keypair_generate": "密匙对生成",
    "format": "格式",
    "about_app": "关于 Crypto Magician",
    "services": "服务",
    "hide_app": "隐藏 Crypto Magician",
    "hide_others": "隐藏其他应用",
    "unhidden": "取消隐藏",
    "show_all": "显示全部",
    "quit_app": "退出 Crypto Magician",
    "close_window": "关闭窗口",
    "edit": "编辑",
    "undo": "撤销",
    "redo": "重做",
    "cut": "剪切",
    "paste": "粘贴",
    "copy": "复制",
    "paste_match_style": "粘贴和匹配样式",
    "delete": "删除",
    "select_all": "全选",
    "speech": "朗读",
    "start_speaking": "开始朗读",
    "stop_speaking": "停止朗读",
    "view": "视图",
    "reload": "刷新",
    "force_reload": "重新加载",
    "toggle_dev_tools": "开发者工具",
    "reset_zoom": "复原缩放",
    "zoom_in": "视距放大",
    "zoom_out": "视距缩小",
    "toggle_full_screen": "全屏显示",
    "language": "语言显示",
    "simplified_chinese": "简体中文",
    "english": "English",
    "window": "窗口",
    "minimize": "最小化",
    "zoom": "缩放",
    "bring_all_to_front": "至于应用顶层",
    "help": "帮助",
    "close": "关闭",
    "exit": "退出",
    "x509": "X.509",
    "key_size": "密匙大小",
    "rsa_default_key_size": "默认为 2048 bits",
    "exponent": "指数",
    "rsa_default_exponent": "默认为 63357",
    "clear": "清除",
    "modify": "修改",
    "key_passphrase": "私匙密码",
    "new_passphrase": "新的密码",
    "new_passphrase_tips": "请输入新的密码. 如果你想要清除密码, 那么请留空",
    "keypair_passphrase_tips": "请输入你的密码. 如果没有请留空",
    "exit_app": "退出 Crypto Magician",
    "open_keypair_tools": "打开密匙对工具",
    "key_converter": "密匙转换器",
    "out_format": "输出格式",
    "from": "输入",
    "to_format": "输出格式",
    "keypair_convert": "转换器",
    "decrypted": "解密操作",
    "yes_decrypted": "是的 - 进行解密",
    "no_decrypted": "不是 - 保持解密",
    "keep_encrypted_tips": "`AES-256-CBC` 算法将被使用. 如果你需要改变算法, 请使用 `密码` 功能.",
    "hmac_text": "HMAC 文本",
    "hash_extension": "哈希扩展",
    "sign_verify": "签名 认证",
    "extract": "提取",
    "your_key": "你的密匙",
    "convert_tips": "请输入你的公匙或私匙",
    "convert_key_not_empty": "密匙不能为空",
    "keypair_checker": "密匙对校验器",
    "key_info_parser": "密匙信息解析",
    "check": "校验",
    "error_format_key_not_supported": "错误: 未知的密匙格式. 仅支持 PKCS#1 与 PKCS#8",
    "check_is_matched": "该密匙对是匹配的",
    "check_not_matched": "该密匙对不匹配",
    "parse": "解析",
    "modulus": "模数",
    "max_encrypted_size": "最大值",
    "max_encrypted_size_before": "最大的数据解密长度是 ",
    "for_encrypt_in_bytes": " 字节",
    "sign_and_verify": "签名与验证",
    "sign": "签名",
    "verify": "验证",
    "private_sign": "私匙签名",
    "public_verify": "公匙验证",
    "salt_length": "盐长度",
    "message": "信息",
    "please_input_message": "请输入信息",
    "sign_text": "签名文本",
    "setting": "设置",
    "signature": "签名结果",
    "please_input_signature": "请输入签名结果",
    "sign_not_empty": "签名结果不能为空",
    "verify_result" : "验证结果",
    "x509_from_distant_host": "远程主机提取 X.509",
    "x509_from_private_key": "私匙提取 X.509",
    "host": "主机",
    "port": "端口",
    "please_input_host": "请输入主机",
    "host_not_empty": "主机不能为空",
    "port_not_empty": "端口不能为空",
    "please_input_port": "主机端口. 默认为 443",
    "reject_unauthorized":   "CA 证书验证",
    "options": "选项",
    "information": "信息",
    "x509_tips": "请输入 JSON 格式的证书信息. 这将会应用于 issuer 和 subject. 例如",
    "info": "信息",
    "default_info": "示例信息",
    "days": "天数",
    "days_tips": "请输入天数",
    "salt_tips": "请输入盐值长度",
    "day_not_empty": "天数不能为空",
    "salt_not_empty": "盐值长度不能为空",
    "no_need_salt": "不需要盐值",
    "info_not_empty": "证书信息不能为空",
    "info_not_parse": "信息不能被解析",
    "jwk_error": "UnsupportedJWKType. 请检查你的私匙并确认你输入了正确的密码",
    "public_from_x509": "X.509 提取公匙",
    "x509_cert": "X509 证书",
    "cert_not_empty": "证书不能为空",
    "please_input_cert": "请输入 X509 证书",
    "x509_format_error": "Unsupported X509 Type. 请检查你的证书",
    "pbkdf2": "PBKDF2",
    "key_len": "密匙长度",
    "key_len_not_empty": "密匙长度不能为空",
    "key_len_tips": "请输入密匙长度",
    "iterations": "迭代轮数",
    "iterations_tips": "请输入迭代轮数",
    "iterations_not_empty": "迭代轮数不能为空",
    "salt": "盐值",
    "salt_encoding": "盐值编码",
    "please_input_salt": "请输入盐值",
    "password_text": "密码文本",
    "password": "密码",
    "please_input_password": "请输入密码",
    "scrypt": "Scrypt",
    "cost": "消耗",
    "cost_tips": "CPU/内存 消耗",
    "cost_msg": "默认为 16384. 需要是二的N次幂",
    "block_size": "块大小",
    "block_tips": "块大小. 默认为 8",
    "parallelization": "并行参数",
    "parallelization_tips": "并行化参数. 默认为 1",
    "maxmem": "最大内存",
    "maxmem_upper": "内存使用上限",
    "maxmem_tips": "默认为 32 * 1024 * 1024. 支持 Eval. 当 (大约值) 128 * 消耗成本 * 块大小 > 最大内存 会发生错误",
    "hash_synchronous": "HASH - 同步",
    "kdf_synchronous": "KDF - 同步",
    "kdf_not_salt": "KDF 不需要盐值",
    "radix_convert": "进制转换",
    "plain_radix": "输入进制",
    "out_radix": "输出进制",
    "please_input_plain_radix": "请输入输入进制",
    "please_input_out_radix": "请输入输出进制",
    "plain_radix_tips": "例如, 十六进制的表达是: 0123456789abcdef",
    "out_radix_tips": "例如, 十六进制的表达是: 0123456789abcdef",
    "radix_plain_not_empty": "输入进制不能为空",
    "out_radix_not_empty": "输出进制不能为空",
    "data": "数据",
    "please_input_data": "请输入数据",
    "data_not_empty": "数据不能为空",
    "calculation": "位计算器",
    "param_one": "参数 Ⅰ",
    "param_two": "参数 Ⅱ",
    "param_not_empty": "参数不能为空",
    "please_input_param": "请输入参数",
    "and": "与运算 (&)",
    "or": "或运算 (|)",
    "xor": "异或运算 (^)",
    "not": "取反运算 (~)",
    "shl": "左移运算 (<<)",
    "shr": "带符号右移 (>>)",
    ">>>": "右移运算 (>>>)",
    "calculate": "计算器",
    "ecdh": "ECDH",
    "other_public": "其他公匙",
    "curves": "曲线",
    "curves_select": "请选择曲线",
    "generate_key": "生成密匙",
    "success": "成功",
    "more": "其他工具",
    "open_encoding_tools": "打开编/解码工具",
    "encoding_converter": "编码转换器",
    "encoding_wiki": "<h3><b>支持的编码</b></h3><br>    Node.js 原生编码:  <b>utf8, ucs2 / utf16le, ascii, binary, base64, hex</b><br><br>    Unicode: <b>UTF-16BE, UTF-16 (with BOM)</b><br><br>    单字节码:<br> Windows 编码: <b>874, 1250-1258 (aliases: cpXXX, winXXX, windowsXXX)</b><br>    ISO 编码: <b>ISO-8859-1 - ISO-8859-16</b><br>    IBM 编码: <b>437, 737, 775, 808, 850, 852, 855-858, 860-866, 869, 922, 1046, 1124, 1125, 1129, 1133, 1161-1163 (aliases cpXXX, ibmXXX)</b><br>    Mac 编码: <b>maccroatian, maccyrillic, macgreek, maciceland, macroman, macromania, macthai, macturkish, macukraine, maccenteuro, macintosh</b><br>    KOI8 编码: <b>koi8-r, koi8-u, koi8-ru, koi8-t</b></br>    其他: <b>armscii8, rk1048, tcvn, georgianacademy, georgianps, pt154, viscii, iso646cn, iso646jp, hproman8, tis620</b><br><br>    多字节码: <br> 日文: <b>Shift_JIS, Windows-31j, Windows932, EUC-JP</b><br>    中文: <b>GB2312, GBK, GB18030, Windows936, EUC-CN</b><br>    韩文: <b>KS_C_5601, Windows949, EUC-KR</b><br>    台湾/香港: <b>Big5, Big5-HKSCS, Windows950</b><br>",
    "encoding_tools": "编码工具",
    "encoding_tools_title": "Crypto Magician - 编码工具",
    "time_stamp": "时间戳",
    "date_time": "日期时间",
    "please_input_time_stamp": "请输入时间戳",
    "to_stamp": "到时间戳",
    "to_date": "到日期时间",
    "invalid_date": "无效的日期时间",
    "get_now_stamp": "当前时间戳",
    "invalid_stamp": "无效的时间戳",
    "random_bytes": "随机字节",
    "bytes_size": "字节大小",
    "random_tips": "默认为 16",
    "no_result": "没有生成的字节以显示",
    "encoding_not_empty": "编码不能为空",
    "in_encoding": "输入",
    "out_encoding": "输出",
    "from_encoding": "源文本编码",
    "to_encoding": "输出文本编码",
    "text": "文本",
    "please_input_text": "请输入文本",
    "text_not_empty": "文本不能为空",
    "not_supported_encoding": "不是支持的编码",
    "settings": "设置",
    "we_are_using_nodejs": "我们使用 Node.js",
    "_chromium": ", Chromium",
    "_electron": ", Electron",
    "_layui": ", LayUI 2.4.5",
    "support_hash": "支持算法的摘要表",
    "hash_name": "哈希名称",
    "hex_len": "十六进制长度",
    "hmac_support": "支持的 HMAC",
    "support_block_cipher": "支持的块密码模式表",
    "cipher_name": "密码名称",
    "rsa_abstract_table": "RSA 算法摘要表",
    "support_algorithm_abstract": "支持算法的摘要表",
    "iv_size": "初始向量",
    "apply": "应用",
    "cancel": "取消",
    "shortcut": "热键",
    "shortcut_tips": "隐藏或显示 Crypto Magician. 多键组合请使用 \"+\" 来连接",
    "press_shortcut": "现在按下热键",
    "default_shortcut": "默认为 Alt+Shift+C",
    "auto_launch": "开机启动",
    "tray_launch": "托盘启动",
    "launch": "运行",
    "auto_launch_tips": "运行 Crypto Magician 在我登录 Windows 的时候",
    "tray_launch_tips": "Crypto Magician 从托盘启动而不显示主窗口",
    "settings_saved": "设置已保存.下次启动应用时生效",
    "settings_apply": "设置应用",
    "restart_app": "重启应用",
    "ok_know": "好的, 我知道了",
    "app_background_run": "点击以显示主窗口",
    "single_instance": "单实例控制锁",
    "single_instance_tips": "你已经运行了 Crypto Magician. 也许你可以在托盘找到它",
    "open_app_settings": "打开应用设置",
    "remarks": "备注",
    "push_issues": "提交问题",
    "check_update": "检查更新",
    "about_remarks": "关于 & 备注",
    "about_info": "Crypto Magician 是一个开源软件. 受 Apache-2.0 约束. 项目源码已在",
    "about_project": "项目的主页包含了使用说明、已知问题和备注. 感谢您的使用 !",
    "visit_github_page": "打开项目主页",
    "japanese": "日本語"
};

function f() {
    return JSON.stringify(data);
}

module.exports = {
    f
};


