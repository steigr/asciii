(function() {var implementors = {};
implementors["lazy_static"] = ["impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;'a, B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='https://doc.rust-lang.org/nightly/collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a>, B::<a class='trait' href='https://doc.rust-lang.org/nightly/collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a>T<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/c_str/struct.CStr.html' title='std::ffi::c_str::CStr'>CStr</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/c_str/struct.CString.html' title='std::ffi::c_str::CString'>CString</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/os_str/struct.OsStr.html' title='std::ffi::os_str::OsStr'>OsStr</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/os_str/struct.OsString.html' title='std::ffi::os_str::OsString'>OsString</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>",];implementors["bill"] = ["impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/c_str/struct.CStr.html' title='std::ffi::c_str::CStr'>CStr</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/c_str/struct.CString.html' title='std::ffi::c_str::CString'>CString</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/os_str/struct.OsStr.html' title='std::ffi::os_str::OsStr'>OsStr</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/os_str/struct.OsString.html' title='std::ffi::os_str::OsString'>OsString</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>","impl&lt;'a, B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='https://doc.rust-lang.org/nightly/collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a>, B::<a class='trait' href='https://doc.rust-lang.org/nightly/collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a>T<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>",];implementors["encode_unicode"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; for <a class='struct' href='encode_unicode/struct.Utf8Char.html' title='encode_unicode::Utf8Char'>Utf8Char</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='encode_unicode/struct.Utf8Char.html' title='encode_unicode::Utf8Char'>Utf8Char</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u16.html'>u16</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; for <a class='struct' href='encode_unicode/struct.Utf16Char.html' title='encode_unicode::Utf16Char'>Utf16Char</a>",];implementors["num"] = ["impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/c_str/struct.CStr.html' title='std::ffi::c_str::CStr'>CStr</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/c_str/struct.CString.html' title='std::ffi::c_str::CString'>CString</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/os_str/struct.OsStr.html' title='std::ffi::os_str::OsStr'>OsStr</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/os_str/struct.OsString.html' title='std::ffi::os_str::OsString'>OsString</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>","impl&lt;'a, B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='https://doc.rust-lang.org/nightly/collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a>, B::<a class='trait' href='https://doc.rust-lang.org/nightly/collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a>T<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>",];implementors["chrono"] = ["impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/c_str/struct.CStr.html' title='std::ffi::c_str::CStr'>CStr</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/c_str/struct.CString.html' title='std::ffi::c_str::CString'>CString</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/os_str/struct.OsStr.html' title='std::ffi::os_str::OsStr'>OsStr</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/os_str/struct.OsString.html' title='std::ffi::os_str::OsString'>OsString</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>","impl&lt;'a, B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='https://doc.rust-lang.org/nightly/collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a>, B::<a class='trait' href='https://doc.rust-lang.org/nightly/collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a>T<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>",];implementors["error_chain"] = ["impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/c_str/struct.CStr.html' title='std::ffi::c_str::CStr'>CStr</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/c_str/struct.CString.html' title='std::ffi::c_str::CString'>CString</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/os_str/struct.OsStr.html' title='std::ffi::os_str::OsStr'>OsStr</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/os_str/struct.OsString.html' title='std::ffi::os_str::OsString'>OsString</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>","impl&lt;'a, B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='https://doc.rust-lang.org/nightly/collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a>, B::<a class='trait' href='https://doc.rust-lang.org/nightly/collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a>T<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>",];implementors["asciii"] = ["impl&lt;'a, B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='https://doc.rust-lang.org/nightly/collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a>, B::<a class='trait' href='https://doc.rust-lang.org/nightly/collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a>T<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; for <a class='struct' href='encode_unicode/utf8_char/struct.Utf8Char.html' title='encode_unicode::utf8_char::Utf8Char'>Utf8Char</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='encode_unicode/utf8_char/struct.Utf8Char.html' title='encode_unicode::utf8_char::Utf8Char'>Utf8Char</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u16.html'>u16</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; for <a class='struct' href='encode_unicode/utf16_char/struct.Utf16Char.html' title='encode_unicode::utf16_char::Utf16Char'>Utf16Char</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/c_str/struct.CStr.html' title='std::ffi::c_str::CStr'>CStr</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/c_str/struct.CString.html' title='std::ffi::c_str::CString'>CString</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/os_str/struct.OsStr.html' title='std::ffi::os_str::OsStr'>OsStr</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/os_str/struct.OsString.html' title='std::ffi::os_str::OsString'>OsString</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>",];implementors["asciii"] = ["impl&lt;'a, B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='https://doc.rust-lang.org/nightly/collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a>, B::<a class='trait' href='https://doc.rust-lang.org/nightly/collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a>T<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; for <a class='struct' href='encode_unicode/utf8_char/struct.Utf8Char.html' title='encode_unicode::utf8_char::Utf8Char'>Utf8Char</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='encode_unicode/utf8_char/struct.Utf8Char.html' title='encode_unicode::utf8_char::Utf8Char'>Utf8Char</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u16.html'>u16</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; for <a class='struct' href='encode_unicode/utf16_char/struct.Utf16Char.html' title='encode_unicode::utf16_char::Utf16Char'>Utf16Char</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/c_str/struct.CStr.html' title='std::ffi::c_str::CStr'>CStr</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/c_str/struct.CString.html' title='std::ffi::c_str::CString'>CString</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/os_str/struct.OsStr.html' title='std::ffi::os_str::OsStr'>OsStr</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/os_str/struct.OsString.html' title='std::ffi::os_str::OsString'>OsString</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>",];implementors["asciii"] = ["impl&lt;'a, B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;B&gt; for <a class='enum' href='https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='https://doc.rust-lang.org/nightly/collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a>, B::<a class='trait' href='https://doc.rust-lang.org/nightly/collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>Owned</a>: 'a</span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a>T<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; for <a class='struct' href='encode_unicode/utf8_char/struct.Utf8Char.html' title='encode_unicode::utf8_char::Utf8Char'>Utf8Char</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='encode_unicode/utf8_char/struct.Utf8Char.html' title='encode_unicode::utf8_char::Utf8Char'>Utf8Char</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u16.html'>u16</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; for <a class='struct' href='encode_unicode/utf16_char/struct.Utf16Char.html' title='encode_unicode::utf16_char::Utf16Char'>Utf16Char</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/c_str/struct.CStr.html' title='std::ffi::c_str::CStr'>CStr</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/c_str/struct.CString.html' title='std::ffi::c_str::CString'>CString</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/os_str/struct.OsStr.html' title='std::ffi::os_str::OsStr'>OsStr</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/ffi/os_str/struct.OsString.html' title='std::ffi::os_str::OsString'>OsString</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
