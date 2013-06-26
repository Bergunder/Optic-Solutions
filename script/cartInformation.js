var moneyNum = 0;
var itemsNum = 0;
						
	function itemPlus() {
		itemsNum += 1;
		document.getElementById("items").innerHTML = "Items: " + itemsNum;
			
		moneyNum += 129;
		document.getElementById("money").innerHTML = "Total: $" + moneyNum;
		}
				
	function itemSale() {
		itemsNum += 1;
		document.getElementById("items").innerHTML = "Items: " + itemsNum;
				
		moneyNum += 119;
		document.getElementById("money").innerHTML = "Total: $" + moneyNum;
		}
			