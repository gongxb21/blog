(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{189:function(e,t,i){"use strict";i.r(t);var k={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},y=i(5),n=Object(y.a)(k,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[i("p",[e._v("Key 命令")]),e._v(" "),i("ol",[i("li",[e._v("exists key key 是否存在，1 存在，0 不存在")]),e._v(" "),i("li",[e._v("del key 删除 key")]),e._v(" "),i("li",[e._v("dump key 序列化 key")]),e._v(" "),i("li",[e._v("EXPIRE key seconds 为给定 key 设置过期时间。")]),e._v(" "),i("li",[e._v("EXPIREAT key timestamp  EXPIREAT 的作用和 EXPIRE 类似，都用于为 key 设置过期时间。 不同在于 EXPIREAT 命令接受的时间参数是 UNIX 时间戳(unix timestamp)")]),e._v(" "),i("li",[e._v("PEXPIRE key milliseconds  设置 key 的过期时间以毫秒计。")]),e._v(" "),i("li",[e._v("PEXPIREAT key milliseconds-timestamp  设置 key 过期时间的时间戳(unix timestamp) 以毫秒计")]),e._v(" "),i("li",[e._v("keys pattern 用于查找所有符合给定模式 pattern 的 key 。。\n特殊的 keys * 返回所有键")]),e._v(" "),i("li",[e._v("MOVE key db  将当前数据库的 key 移动到给定的数据库 db 当中。")]),e._v(" "),i("li",[e._v("PERSIST KEY_NAME 命令用于移除给定 key 的过期时间，使得 key 永不过期。")]),e._v(" "),i("li",[e._v("PTTL key  以毫秒为单位返回 key 的剩余的过期时间。Time To Live")]),e._v(" "),i("li",[e._v("ttl key 以秒为单位返回 key 的剩余过期时间")]),e._v(" "),i("li",[e._v("randomkey 从当前数据库随机返回一个 key")]),e._v(" "),i("li",[e._v("RENAME key newkey  修改 key 的名称")]),e._v(" "),i("li",[e._v("RENAMENX key newkey  仅当 newkey 不存在时，将 key 改名为 newkey 。")]),e._v(" "),i("li",[e._v("TYPE key  返回 key 所储存的值的类型。")])])])},[],!1,null,null,null);n.options.__file="redis_key.md";t.default=n.exports}}]);