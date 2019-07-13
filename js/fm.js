$(document).ready(function(){
	
	
	$(".kirim").click(function(){
		var cd = $(".cwd").val();
		filemanager(cd);
	});

	function filemanager(cox){
		var fileList = $("tbody");
		var fm = scannedFolders = [], scannedFiles = [];
		var table;
		
		$.post('filemanager.php', { dir: cox }, function(data) {
			var fm = JSON.parse(data);
			$(".cwd").val(fm[0]);
			
			fm.items.forEach(function(d){
				if (d.type === 'dir') {
					scannedFolders.push(d);
				}
				else if (d.type === 'file') {
					scannedFiles.push(d);
				}
			});
			table = $('<tr><th class="th_home"><center>Name</center></th><th class="th_home"><center>Type</center></th><th class="th_home"><center>Size</center></th><th class="th_home"><center>Last Modified</center></th><th class="th_home"><center>Owner/Group</center></th><th class="th_home"><center>Permission</center></th><th class="th_home"><center>Action</center></th></tr>');
			//table.appendTo(fileList);
			fileList.html('').append(table);
			if(scannedFolders.length) {
				scannedFolders.forEach(function(f) {
					var folder = $('<tr><td class="folder" ><img src=""><a href="'+ f.path +'">'+ f.name +'</a></td><td>'+ f.type +'</td><td>'+ f.size +'</td><td>'+ f.time +'</td><td>'+ f.owner +'</td><td>'+ f.perms +'</td><td><a href="">newfile</a> | <a href="">newfolder</a></td></tr>');
					folder.appendTo(fileList);
				});
			}
			if(scannedFiles.length) {
				scannedFiles.forEach(function(f) {
					var file = $('<tr><td class="file" ><img src=""><a href="'+ f.path +'">'+ f.name +'</a></td><td>'+ f.type +'</td><td>'+ f.size +'</td><td>'+ f.time +'</td><td>'+ f.owner +'</td><td>'+ f.perms +'</td><td><a href="">newfile</a> | <a href="">newfolder</a></td></tr>');
					file.appendTo(fileList);
				});
			}
			 scannedFolders = '';
			 scannedFiles = '';
			$(".filemanager .folder").on('click', 'a', function(e){
				var index = $(this).attr("href");
					filemanager(index);
			});
		});
		
		
	}
});













