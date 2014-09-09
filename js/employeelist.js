/*var serviceURL = "http://localhost/jquerymobile/appicedtea/services/";*/

var serviceURL = "http://sip-by-sip.info/services/";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'getemployees.php', function(data) {
		$('#employeeList li').remove();
		employees = data.items;
		$.each(employees, function(index, productos) {
			$('#employeeList').append('<li><a href="employeedetails.html?id=' + productos.id + '">' +
					'<img src="pics/' + productos.picture + '"/>' +
					'<h4>' + productos.nombre + ' ' + productos.categoria + '</h4>' +
					'<p>' + productos.precio + '</p>' +
					'<span class="ui-li-count">' + productos.precio + '</span></a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}