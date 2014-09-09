$('#reportListPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	console.log("reports for " + id);
	$.getJSON(serviceURL + 'getreports.php?id='+id, function (data) {
		var reports = data.items;
		$.each(reports, function(index, productos) {
			$('#reportList').append('<li><a href="employeedetails.html?id=' + productos.id + '">' +
					'<h4>' + productos.firstName + ' ' + productos.lastName + '</h4>' +
					'<p>' + productos.title + '</p>' +
					'<span class="ui-li-count">' + productos.reportCount + '</span></a></li>');
		});
		$('#reportList').listview('refresh');
	});
});
