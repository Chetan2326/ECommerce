$(function() {
	// solving the active menu problem
	switch(menu) {
	
		case 'About Us':
			$('#about').addClass('active');
			break;
		case 'Contact Us':
			$('#contact').addClass('active');
			break;
		case 'All Products':
			$('#listProducts').addClass('active');
			break;
		default:	
			if(menu == "Home") break;
			$('#listProducts').addClass('active');
			$('#a_'+menu).addClass('active');
			break;		
	}


	// code for jquery datatables

	var $table = $('#productListTable');
	
	// execute the below code only where we have this table
	if($table.length)	{
		// console.log('Inside the table!');

		var jsonUrl = '';
		if(window.categoryId == '')	{
			jsonUrl = window.contextRoot + '/json/data/all/products';
		}
		else {
			jsonUrl = window.contextRoot + '/json/data/category/'+ window.categoryId +'/products';
		}
		
		$table.DataTable({
			
			lengthMenu: [[3,5,10,-1], ['3 Records', '5 Records', '10 Records', 'All']],
			pageLength: 5, 
			"ajax":	{
				"url": jsonUrl,
				"dataSrc": ""
			},
			columns: [
				
				{
					data: 'name'
				},
				{
					data: 'brand'
				},
				{
					data: 'unitPrice',
					mRender: function(data, type, row)	{
						return '&#8377; '+ data
					}
				},
				{
					data: 'quantity'
				},
				{
					data: 'id',
					bSortable: false,
					mRender: function(data, type, row) {
		        		  
		        		  var str = '';
		        		  str += '<a href="'+window.contextRoot+ '/show/'+data+'/product" class="btn btn-primary"><span class="glyphicon glyphicon-eye-open"></span></a> &#160;';
		        		  str += '<a href="'+window.contextRoot+ '/cart/add/'+data+'/product" class="btn btn-warning"><span class="glyphicon glyphicon-shopping-cart"></span></a>';
		        		  
		        		  return str;
					}
				}


			]
			
			
		});
	
	}
	
	
});