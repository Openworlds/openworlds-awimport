// XXX XXX XXX XXX XXX 5.X version!

// TODO handle whitespace in object string
// TODO see how to export non-object data
// TODO improve commandline handling
// TODO read more cache files?

var fs = require('fs');
var execSync = require('child_process').execSync;

if (process.argv.length < 4) {
	console.log('Usage:', process.argv[1], '<cell.idx> <cell.dat> [url]\n');
	console.log('NOTE: only verified to work for AW 5.x+ browsers!');
	process.exit(0);
}

fs.readFile(process.argv[2], function(err,idx) {
	if (err) throw err;

	// Check total file size (first bytes of file)
	var total = idx.readUIntLE(0, 8);
	if (total != idx.length -1) {
		console.log('ERROR: Filesize in header does not match real size: ' + total + ' != ' + (idx.length -1));
		return;
	}

	var offset = idx.readUIntLE(72, 4);
	if (offset != 1024 && offset != 512) {
		console.log('WARNING: Unexpected start position ' + offset);
	}

	var modelcounts = {};

	fs.readFile(process.argv[3], function(err,dat) {
		var block_count = 0;
		var skipped = 0;
		while(offset != 0) {
			var next = idx.readUIntLE(offset, 4);
			offset += 4;
			var previous = idx.readUIntLE(offset, 4);
			offset += 4;
			var count = idx.readUIntLE(offset, 2);
			offset += 2;
			var size = idx.readUIntLE(offset, 4);
			offset += 4;
			var dummy = idx.readUIntLE(offset, 4);
			offset += 4;

			for (var i = 0; i < count; i++) {
				var data_pos = idx.readUIntLE(offset, 4);
				offset += 4;
				var unknown = idx.readUIntLE(offset, 2);
				offset += 2;
				var cell_x = idx.readIntLE(offset, 2);
				offset += 2;
				var cell_z = idx.readIntLE(offset, 2);
				offset += 2;
				console.log('# (' + block_count + ':' + i + '): ' + cell_x + ',' + cell_z + ' (' + unknown + ') data_pos=' + data_pos);

				var data_start = data_pos;
				var marker = dat.readUIntLE(data_pos, 2);
				data_pos += 2;
				var total_size = dat.readUIntLE(data_pos, 4);
				data_pos += 4;
				var size = dat.readUIntLE(data_pos, 4);
				data_pos += 4;

				if (marker != 0xfafa) {
					console.log('Found invalid marker ' + marker + ' at offset ' + (offset - 10));
					continue;
				}
				if (total_size == 14) {
					// XXX Unknown entry of 4 bytes....
					skipped++;
					continue;
				}

				while(size > 0) {
					var
						type = dat.readUIntLE(data_pos + 0, 4),
						// XXX 4: uint32?
						// XXX 8: uint32?
						owner = dat.readUIntLE(data_pos + 12, 4),
						timestamp = dat.readUIntLE(data_pos + 16, 4),
						// XXX 20: uint16?
						x = dat.readIntLE(data_pos + 22, 2),
						y = dat.readIntLE(data_pos + 24, 2),
						z = dat.readIntLE(data_pos + 26, 2),
						yaw = dat.readIntLE(data_pos + 28, 2),
						tilt = dat.readIntLE(data_pos + 30, 2),
						roll = dat.readIntLE(data_pos + 32, 2),
						model_len = dat.readUIntLE(data_pos + 34, 2),
						desc_len = dat.readUIntLE(data_pos + 36, 2),
						action_len = dat.readUIntLE(data_pos + 38, 2),
						objdata_len = dat.readUIntLE(data_pos + 40, 2);

					data_pos += 42;
					size -= 42 + model_len + desc_len + action_len + objdata_len;

					var str = dat.toString('ucs2', data_pos, data_pos + model_len + desc_len + action_len).replace(/\r|\n/g, ' ');
/*
					for (var j = 0; j < model_len + desc_len + action_len; j++) {
						var ch = dat.readUIntLE( data_pos + j, 1 );
						if (ch == 13 || ch == 10) ch = 32;
						str += String.fromCharCode( ch );
					}
*/
					data_pos += model_len + desc_len + action_len + objdata_len;
					model_len /= 2;
					desc_len /= 2;
					action_len /= 2;

					var model = str.substr(0, model_len);
					if (modelcounts[model] === undefined)
						modelcounts[model] = 1;
					else
						modelcounts[model]++;

					console.log(
							owner + ' ' +
							timestamp + ' ' +
							(cell_x * 1000 + x) + ' ' +
							y + ' ' +
							(cell_z * 1000 + z) + ' ' +
							yaw + ' ' +
							tilt + ' ' +
							roll + ' ' +
							type + ' ' +
							model_len + ' ' +
							desc_len + ' ' +
							action_len + ' ' +
						 	objdata_len + ' ' +
							str);
				}
			}
			block_count++;
			offset = next;
		}
		console.log('# Skipped ' + skipped + ' entries');

		if (process.argv[4] !== undefined) {
			for (var path in modelcounts) {
				var arch = path.replace('.rwx', '.zip');
				if (arch.indexOf('.zip') < 0) {
					arch += '.zip';
				}

				try {
					execSync('wget http://' + process.argv[4] + arch);
				} catch (e) {
					console.log('Error retrieving file ' + arch, e);
				}
			}
		}
		//console.log(modelcounts);
		//
		//
	});
});


