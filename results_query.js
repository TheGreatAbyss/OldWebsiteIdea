function createQuery (obj) {
	var querytext = "select Apartment_ID, Price, Bedrooms, Bathrooms, Square_Feet, Listing_By, " + 
	" to_char(Available_Date,'mm/dd/yyyy') as available_date, Address_1, Address_2, n.Neighborhood, comments " + 
		"  from apartments a INNER JOIN Neighborhoods n on a.neighborhood_id = n.neighborhood_ID where active = true "
	var locations = obj.locations.length === 0 ? "" : " AND (a.borough_id in (" + obj.locations + ") OR a.area_id in (" + obj.locations + ") " +
		" OR a.neighborhood_id in (" + obj.locations + ") OR a.sub_neighborhood_id in (" + obj.locations + "))"
	var minprice = " AND price >= " + obj.minprice
	var maxprice = " AND price <= " + obj.maxprice
	var availableby = " AND (available_date >= to_date('" + obj.availableby + "', 'mm-dd-yyyy') or available_date is null)"
	var bedrooms = " AND bedrooms " + (obj.bedmore === "true" ? ">" : "") +"= " + obj.bedrooms
	var bathrooms = " AND bathrooms " + (obj.bathmore === "true" ? ">" : "") +"= " + obj.bathrooms
	var By_Owner = obj.By_Owner === "true" ? " AND Listing_By = 'Owner'" : " "
	var Dishwasher = obj.Dishwasher === "true" ? " AND Dishwasher = true" : " "
	var Laundry = obj.Laundry === "true" ? " AND Laundry = true" : " "
	var Dogs = obj.Dogs === "true" ? " AND Dogs = true" : " "		
	var Cats = obj.Cats === "true" ? " AND Cats = true" : " "	
	var Other_Pets = obj.Other_Pets === "true" ? " AND Other_Pets = true" : " "
	var Outdoor = obj.Outdoor === "true" ? " AND Outdoor_Space = true" : " "	
	var Fireplace = obj.Fireplace === "true" ? " AND Fireplace = true" : " "	
	var Furnished = obj.Furnished === "true" ? " AND Furnished = true" : " "	
	var Gym = obj.Gym === "true" ? " AND Gym = true" : " "
	var Pool = obj.Pool === "true" ? " AND Pool = true" : " "
	var Storage = obj.Storage === "true" ? " AND Available_Storage = true" : " "
	var Parking = obj.Parking === "true" ? " AND Parking_Available = true" : " "

	querytext = querytext + locations + minprice + maxprice + availableby + bedrooms + bathrooms + By_Owner + Dishwasher
	+ Laundry + Cats + Other_Pets + Outdoor + Fireplace + Furnished + Gym + Pool + Storage + Parking

	return querytext
}

module.exports = createQuery