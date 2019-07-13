$(document).ready(function(){
	var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

	$("#sym").click(function(){
		$("#subtitle").text("Symlink");
		formTarget();
		$("#submit").click(function(){
			var x = $("#url").val();
			var pesan ={ "action":"sym", "target": x };
			if(x == ''){
				return alert("please insert target");
			}
			kirim(pesan);
		});
	});
	$("#gdork").click(function(){
		$("#subtitle").text("Google");
		formTarget();
		$("#submit").click(function(){
			var x = $("#url").val();
			var pesan ={ "action":"gdork", "target": x };
			if(x == ''){
				return alert("please insert target");
			}
			kirim(pesan);
		});
	});
	$("#bing").click(function(){
		$("#subtitle").text("Bing");
		formTarget();
		$("#submit").click(function(){
			var x = $("#url").val();
			var pesan ={ "action":"bing", "target": x };
			if(x == ''){
				return alert("please insert target");
			}
			kirim(pesan);
		});
	});
	$("#get").click(function(){
		$("#subtitle").text("Get-file");
		formTarget();
		$("#submit").click(function(){
			var x = $("#url").val();
			var pesan ={ "action":"get", "target": x };
			if(x == ''){
				return alert("please insert target");
			}
			kirim(pesan);
		});
	});
	$("#csrf").click(function(){
		$("#subtitle").text("Csrf");
		formBtn();
		setOutput('<input type="text" id="target" value="Target"> <input type="text" id="var" value="file, file[]">');
		$("#submit").click(function(){
			var x = $("#var").val();
			var z = x.indexOf("@file");
			window.alert(z);
			//csrf();
		});
	});
	$("#obsv1").click(function(){
		$("#subtitle").text("Obfus v1");
		formBtn();
		setOutput('<textarea id="code"></textarea>');
		$("#submit").click(function(){
			var x = $("#code").val();
			var pesan ={ "action":"obsv1", "code": x };
			if(x == ''){
				return alert("please insert target");
			}
			kirim(pesan);
		});
	});
	$("#obsv2").click(function(){
		$("#subtitle").text("Obfus v2");
		formBtn();
		setOutput('<textarea id="code"></textarea>');
		$("#submit").click(function(){
			var x = $("#code").val();
			var pesan ={ "action":"obsv2", "code": x };
			if(x == ''){
				return alert("please insert target");
			}
			kirim(pesan);
		});
	});
	$("#encoder").click(function(){
		encoder();
		$("#encode").click(function(){
			var c = $("#code").val();
			var o = $("#opt").val();
			var pesan ={ "action":"encoder", "code": c, "op": "encode" , "opt": o };
			if(c == ''){
				return alert("please insert target");
			}
			kirim(pesan);
		});
		$("#decode").click(function(){
			var c = $("#code").val();
			var o = $("#opt").val();
			var pesan ={ "action":"encoder", "code": c, "op": "decode" , "opt": o };
			if(c == ''){
				return alert("please insert target");
			}
			kirim(pesan);
		});
	});
	$("#hasid").click(function(){
		$("#subtitle").text("Hashid");
		formTarget();
		$("#submit").click(function(){
			var x = $("#url").val();
			var pesan ={ "action":"hasid", "target": x };
			if(x == ''){
				return alert("please insert target");
			}
			kirim(pesan);
		});
	});
	$("#hashgen").click(function(){
		$("#subtitle").text("HashGen");
		formTarget();
		$("#submit").click(function(){
			var x = $("#url").val();
			var pesan ={ "action":"hashgen", "target": x };
			if(x == ''){
				return alert("please insert target");
			}
			kirim(pesan);
		});
	});
	$("#isup").click(function(){
		$("#subtitle").text("IsUp");
		formTarget();
		$("#submit").click(function(){
			var x = $("#url").val();
			var pesan ={ "action":"isup", "target": x };
			if(x == ''){
				return alert("please insert target");
			}
			kirim(pesan);
		});
	});
	$("#revsip").click(function(){
		$("#subtitle").text("Reverse-ip");
		formTarget();
		$("#submit").click(function(){
			var x = $("#url").val();
			var pesan ={ "action":"revsip", "target": x };
			if(x == ''){
				return alert("please insert target");
			}
			kirim(pesan);
		});
	});
	$("#paste").click(function(){
		$("#subtitle").text("Paste");
		formTarget();
		$("#submit").click(function(){
			var x = $("#url").val();
			var pesan ={ "action":"paste", "target": x };
			if(x == ''){
				return alert("please insert target");
			}
			kirim(pesan);
		});
	});
	$("#unphp").click(function(){
		$("#subtitle").text("Unphp");
	});
	$("#wpbrute").click(function(){
		$("#subtitle").text("Wp-brute");
		formTarget();
		$("#submit").click(function(){
			var x = $("#url").val();
			var pesan ={ "action":"wpbrute", "target": x };
			if(x == ''){
				return alert("please insert target");
			}
			kirim(pesan);
		});
	});
	$("#wpscan").click(function(){
		$("#subtitle").text("Wp-scan");
		formTarget();
		$("#submit").click(function(){
			var x = $("#url").val();
			var pesan ={ "action":"wpscan", "target": x };
			if(x == ''){
				return alert("please insert target");
			}
			kirim(pesan);
		});
	});
	$("#shellscan").click(function(){
		$("#subtitle").text("Shell-scan");
		formTarget();
		$("#submit").click(function(){
			var x = $("#url").val();
			var pesan ={ "action":"shellscan", "target": x };
			if(x == ''){
				return alert("please insert target");
			}
			kirim(pesan);
		});
	});
	$("#admfind").click(function(){
		$("#subtitle").text("AdmFind");
		formTarget();
		$("#submit").click(function(){
			var x = $("#url").val();
			var pesan ={ "action":"admfind", "target": x };
			if(x == ''){
				return alert("please insert target");
			}
			kirim(pesan);
		});
	});
	$("#crime").click(function(){
		$("#subtitle").text("Crime-flare");
		formTarget();
		$("#submit").click(function(){
			var x = $("#url").val();
			var pesan ={ "action":"crime", "target": x };
			if(x == ''){
				return alert("please insert target");
			}
			kirim(pesan);
		});
	});
	$("#ftp").click(function(){
		$("#subtitle").text("Ftp");
		formTarget();
		$("#submit").click(function(){
			var x = $("#url").val();
			var pesan ={ "action":"ftp", "target": x };
			if(x == ''){
				return alert("please insert target");
			}
			kirim(pesan);
		});
	});
	$("#whois").click(function(){
		$("#subtitle").text("Whois");
		formTarget();
		$("#submit").click(function(){
			var x = $("#url").val();
			var pesan ={ "action":"whois", "target": x };
			if(x == ''){
				return alert("please insert target");
			}
			kirim(pesan);
		});
	});
	$("#com").click(function(){
		$("#subtitle").text("Commander");
		formTarget();
		$("#submit").click(function(){
			var x = $("#url").val();
			var pesan ={ "action":"com", "target": x };
			if(x == ''){
				return alert("please insert target");
			}
			kirim(pesan);
		});
	});
	$("#val").click(function(){
		$("#subtitle").text("Evals");
		formTarget();
		$("#submit").click(function(){
			var x = $("#url").val();
			var pesan ={ "action":"val", "target": x };
			if(x == ''){
				return alert("please insert target");
			}
			kirim(pesan);
		});
	});
	$("#dl").click(function(){
		$("#subtitle").text("Evals");
		formTarget();
		$("#submit").click(function(){
			var x = $("#url").val();
			var pesan ={ "action":"dl", "target": x };
			if(x == ''){
				return alert("please insert target");
			}
			kirim(pesan);
		});
	});
	$("#about").click(function(){
		clearOutput();
		$("#footer .container .input .xxx").html('');
		$("#subtitle").text("About");
		var about = Base64.decode("PGRpdiBjbGFzcz0idGVudGFuZyI+Cgk8dWw+CgkJPGxpPjxoND5UTyBCRSBVU0VEIEZPUiBFRFVDQVRJT05BTCBQVVJQT1NFUyBPTkxZLjxoND48L2xpPgoJCTxicj4KCQk8bGk+VGhlIHVzZSBvZiB0aGlzLCBpcyBDT01QTEVURSBSRVNQT05TSUJJTElUWSBvZiB0aGUgRU5ELVVTRVIuPC9saT4KCQk8bGk+RGV2ZWxvcGVyIGFzc3VtZSBOTyBsaWFiaWxpdHkgYW5kIGFyZSBOT1QgcmVzcG9uc2libGUgZm9yIGFueSBtaXN1c2Ugb3IgZGFtYWdlIGNhdXNlZCBieSB0aGlzIHByb2dyYW0uPC9saT4KCQk8YnI+CgkJPGxpPjxoND5ESVNDTEFJTUVELjwvaDQ+PC9saT4KCQk8bGk+SU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLDwvbGk+CgkJPGxpPk9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pPC9saT4KCQk8bGk+SE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLDwvbGk+CgkJPGxpPldIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSk8L2xpPgoJCTxsaT5BUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS4iIFRha2VuIGZyb20gTElDRU5TRS48L2xpPgoJCTxicj4KCQk8bGk+PGg0PkhBTllBIERJR1VOQUtBTiBVTlRVSyBUVUpVQU4gUEVORElESUtBTi48aDQ+PC9saT4KCQk8YnI+CgkJPGxpPlRBTkdHVU5HIEpBV0FCIHBlbmdndW5hYW4gcGVyYW5na2F0IGx1bmFrIGluaSwgYWRhbGFoIFNFUEVOVUhOWUEgVEFOR0dVTkcgSkFXQUIgUEVOR0dVTkEuPC9saT4KCQk8bGk+UGVuZ2VtYmFuZyBUSURBSyBiZXJrZXdhamliYW4gZGFuIFRJREFLIGJlcnRhbmdndW5nIGphd2FiIGF0YXMgcGVueWFsYWhndW5hYW4gYXRhdSBrZXJ1c2FrYW4geWFuZyBkaXNlYmFia2FuIG9sZWggcGVyYW5na2F0IGx1bmFrIGluaS48L2xpPgoJCTxicj4KCQk8bGk+PGg0PkRJVE9MQUsuPC9oND48L2xpPgoJCTxsaT5EQUxBTSBBQ0FSQSBBVEFVIENBUkEgQVBBIFBVTiwgUEVNRUdBTkcgSEFLIENJUFRBIEFUQVUgS09OVFJJQlVUT1IgQUtBTiBCRVJUQU5HR1VORyBKQVdBQiBBVEFTIElOU0lERU4gTEFOR1NVTkcgLyBUSURBSyBMQU5HU1VORywgS0hVU1VTLCBMVUFSIEJJQVNBLDwvbGk+CgkJPGxpPkFUQVUgS0VSVVNBS0FOIEtPTlNFS1VFTlNJQUwgKFRFUk1BU1VLLCBURVRBUEkgVElEQUsgVEVSQkFUQVMgUEFEQSwgUEVOR0FEQUFOIEJBUkFORyBBVEFVIExBWUFOQU4gUEVOR0dBTlRJOyBLRUhJTEFOR0FOIFBFTkdHVU5BQU4sIERBVEEsIEFUQVUgS0VVTlRVTkdBTjsgQVRBVSBHQU5HR1VBTiBCSVNOSVMpPC9saT4KCQk8bGk+QkFHQUlNQU5BUFVOIFBFTllFQkFCTllBIERBTiBQQURBIFRFT1JJIEtFV0FKSUJBTiBBUEFQVU4sIEJBSUsgREFMQU0gS09OVFJBSywgS0VXQUpJQkFOIEtFVEFULDwvbGk+CgkJPGxpPkFUQVUgS0VSVUdJQU4gKFRFUk1BU1VLIEtFVEVSTEFNQkFUQU4gQVRBVSBMQUlOTllBKSBZQU5HIE1VTkNVTCBEQUxBTSBDQVJBIEFQQVBVTiBEQVJJIFBFTkdHVU5BQU4gUEVSQU5HS0FUIExVTkFLIElOSSw8L2xpPgoJCTxsaT5CQUhLQU4gSklLQSBESUJFUkkgS0VNVU5HS0lOQU4gS0VSVVNBS0FOIFRFUlNFQlVUIERJQU1CSUwgREFSSSBMSVNFTlNJLDwvbGk+CgkJPGJyPgoJCTxsaT48aDQ+U1VQUE9SVEVEIEJZPC9oND48L2xpPgoJCTxsaT5QRUxJVEFCQU5HU0EgLkNBPC9saT4KCQk8bGk+SU5ET1hQTE9JVDwvbGk+CgkJPGxpPkFORCBBTEwgT0YgSU5ET05FU0lBIEhBQ0tFUiAmIERFRkFDRVIgVEVBTTwvbGk+CgkJPGJyPgoJCTxsaT48aDQ+QVVUSE9SPC9oND48L2xpPgoJCTxsaT48aDQ+PGEgaHJlZj0iaHR0cDovL2ZiLmNvbS9tcml2YWk4OSI+TXJpdmFpPC9hPjwvaDQ+PC9saT4KCQk8bGk+PGg0PjxhIGhyZWY9Imh0dHA6Ly9mYi5jb20vbXJpdmFpODkiPjxmb250IGNvbG9yPSJyZWQiPlBFTElUQTwvZm9udD48Zm9udCBjb2xvcj0id2hpdGUiPkJBTkdTQTwvZm9udD48L2E+IC5DQTwvaDQ+PC9saT4KCQk8bGk+WyBJTkRPTkVTSUEgQ1lCRVIgQVRUQUNLIEFORCBNQUxXQVJFIEFOQUxZU1QgXTwvbGk+CgkJPGxpPkxpZ2h0cyBVcCBUaGUgRGFyayBTaWRlIE9mIEluZG9uZXNpYTwvbGk+CgkJPGxpPkNvcHlyaWdodCDCqSAyMDE5PC9saT4KCQk8YnI+PGJyPgoJPC91bD4KPC9kaXY+");
		setOutput(about);
		$(".tentang").scrollText({
			'duration': 5000
		});
	});
	function kirim(pesan){
		$.post("tool.php", {data: Base64.encode(JSON.stringify(pesan))}, function(result){
			setOutput(result);
		});
	}
	function encoder(){
		var string = 'PHRleHRhcmVhIGlkPSJjb2RlIj48L3RleHRhcmVhPg0KPHNlbGVjdCBpZD0ib3B0Ij4NCgk8b3B0aW9uIHZhbHVlPSJ4b3IiPnhvcjwvb3B0aW9uPg0KCTxvcHRpb24gdmFsdWU9ImhleCI+aGV4PC9vcHRpb24+DQoJPG9wdGlvbiB2YWx1ZT0idXJsZW5jb2RlIj51cmw8L29wdGlvbj4NCgk8b3B0aW9uIHZhbHVlPSJjb21wcmVzcyI+Y29tcHJlc3M8L29wdGlvbj4NCgk8b3B0aW9uIHZhbHVlPSJiYXNlNjQiPkJhc2U2NDwvb3B0aW9uPg0KCTxvcHRpb24gdmFsdWU9InVyIj5jb252ZXJ0X3V1PC9vcHRpb24+DQoJPG9wdGlvbiB2YWx1ZT0icm90aSI+c3RyX3JvdDEzPC9vcHRpb24+DQoJPG9wdGlvbiB2YWx1ZT0iYWxwaGEiPmFscGhhIG51bWVyaWM8L29wdGlvbj4NCgk8b3B0aW9uIHZhbHVlPSJpbmZsYXRlcyI+Z3ppbmZsYXRlPC9vcHRpb24+DQoJPG9wdGlvbiB2YWx1ZT0iZ3ppbmZsYXRlcyI+Z3ppbmZsYXRlIC0gYmFzZTY0PC9vcHRpb24+DQoJPG9wdGlvbiB2YWx1ZT0ic3RyMiI+c3RyX3JvdDEzIC0gYmFzZTY0PC9vcHRpb24+DQoJPG9wdGlvbiB2YWx1ZT0iZ3ppbmZsYXRlIj5zdHJfcm90MTMgLSBnemluZmxhdGUgLSBiYXNlNjQ8L29wdGlvbj4NCgk8b3B0aW9uIHZhbHVlPSJzdHIiPnN0cl9yb3QxMyAtIGd6aW5mbGF0ZSAtIHN0cl9yb3QxMyAtIGJhc2U2NDwvb3B0aW9uPg0KCTxvcHRpb24gdmFsdWU9InVybCI+YmFzZTY0IC0gZ3ppbmZsYXRlIC0gc3RyX3JvdDEzIC0gY29udmVydF91dSAtIGd6aW5mbGF0ZSAtIGJhc2U2NDwvb3B0aW9uPg0KPC9zZWxlY3Q+DQo8ZGl2IGNsYXNzPSJyb3ciPg0KCTxkaXYgY2xhc3M9ImNvbC1tZC02Ij4NCgkJPGlucHV0IHR5cGU9InN1Ym1pdCIgaWQ9ImVuY29kZSIgdmFsdWU9IkVuY29kZSI+DQoJPC9kaXY+DQoJPGRpdiBjbGFzcz0iY29sLW1kLTYiPg0KCQk8aW5wdXQgdHlwZT0ic3VibWl0IiBpZD0iZGVjb2RlIiB2YWx1ZT0iRGVjb2RlIj4NCgk8L2Rpdj4NCjwvZGl2Pg=='
		string = Base64.decode(string);
		$("#subtitle").text("Encoder");
		clearOutput();
		$("#footer .container .input .xxx").html("");
		$(".output .container .row .col-md-12").html(string);
	}
	function csrf(){
		var target = $("#target").val();
		var variable = $("#var").val();
		clearOutput();
		setOutput('<form action="" method="post" enctype="multipart/form-data"><input type="file" id="file" name="" ><input type="submit" value="upload" name="upload"></form>');
		$('form').attr("action",target);
		$('#file').attr("nama",variable);
	}
	function formTarget(){
		var form= "PGRpdiBjbGFzcz0icm93IHh4eCI+CgkJCQk8ZGl2IGNsYXNzPSJjb2wtbWQtNiI+CgkJCQkJPGlucHV0IHR5cGU9InRleHQiIGlkPSJ1cmwiIHBsYWNlaG9sZGVyPSJUYXJnZXQiIGRhdGEtcnVsZT0icmVxdWlyZWQiIGRhdGEtbXNnPSJQbGVhc2UgaW5zZXJ0IHRhcmdldCIgPgoJCQkJPC9kaXY+CgkJCQk8ZGl2IGNsYXNzPSJjb2wtbWQtNiI+CgkJCQkJPGlucHV0IGlkPSJzdWJtaXQiIHR5cGU9InN1Ym1pdCIgdmFsdWU9IlN0YXJ0IFNjYW5pbmciPgoJCQkJPC9kaXY+CgkJCTwvZGl2Pg==";
		form = Base64.decode(form);
		clearOutput();
		$("#footer .container .input .xxx").replaceWith(form);
	}
	function formBtn(){
		var form= "PGRpdiBjbGFzcz0icm93IHh4eCI+DQoJCQkJPGRpdiBjbGFzcz0iY29sLW1kLTEyIj4NCgkJCQkJPGlucHV0IGlkPSJzdWJtaXQiIHR5cGU9InN1Ym1pdCIgdmFsdWU9IlN0YXJ0IFNjYW5pbmciPg0KCQkJCTwvZGl2Pg0KCQkJPC9kaXY+";
		form = Base64.decode(form);
		clearOutput();
		$("#footer .container .input .xxx").replaceWith(form);
	}
	function clearOutput(){
		$(".output .container .row .col-md-12").html("");
	}
	function setOutput(x){
		$(".output .container .row .col-md-12").html(x);
	}
	function copy(){
		$('#textarea').focus();
		 $('#textarea').select();
		 document.execCommand('copy');
	}
	
});

/*              
$("input").keyup(function(){
	var txt = $("input").val();
	txt += "";
   $.post("demo_ajax_gethint.html", {suggest: txt}, function(result){
	        $("span").html(result);
    });
 });
 data-rule="required" data-msg="Please write something for us" 
 */