-- Active: 1679228630052@@127.0.0.1@3306

SELECT * from replies


-- Active: 1673075492855@@127.0.0.1@3306
SELECT COUNT(*) AS count, * FROM notifications WHERE created > '2023-03-27 09:49:21.523Z' ORDER BY created DESC LIMIT 1;


-- Active: 1673075492855@@127.0.0.1@3306
SELECT curr.id as id,
curr.month as curr_month,
curr.year as curr_month,
prev.month as prev_month,
curr.elec_readings as current_elec,
curr.water_readings as current_water,
prev.elec_readings as previous_elec,
prev.water_readings as previous_water
FROM bills AS curr
LEFT JOIN bills AS prev
ON prev.id = curr.id AND prev.month = curr.month - 1;



SELECT 
curr_bills.id as id,
prev_bills.id as prev_id,

curr_bills.month as curr_month,
prev_bills.month as prev_month,

curr_bills.year as curr_year,
prev_bills.year as prev_year,

curr_bills.elec_readings as current_elec,
curr_bills.water_readings as current_water,
prev_bills.elec_readings as previous_elec,
prev_bills.water_readings as previous_water
FROM bills AS curr_bills
INNER JOIN bills AS prev_bills
ON curr_bills.id = prev_bills.id ;



SELECT 
curr.id as id,
(SELECT id FROM bills WHERE  month = 3) as prev_id,

curr.month as curr_month,
curr.year as curr_year,
(SELECT month FROM bills WHERE  month = 3) as prev_month,
curr.elec_readings as current_elec,
curr.water_readings as current_water,
(SELECT elec_readings FROM bills WHERE  month = 3) as previous_elec,
(SELECT water_readings FROM bills WHERE  month = 3) as previous_water
FROM bills AS curr
WHERE curr.id = prev_id;



select 
sh.shop_number shop_number,
te.tenant_name shop_name,
sh.order list_order,
prev.elec_readings prev_elec,
curr.elec_readings curr_elec,
(curr.elec_readings - prev.elec_readings) elec_diff,
prev.water_readings prev_water,
curr.water_readings curr_water,
(curr.water_readings - prev.water_readings) water_diff



from shops sh
left join bills curr on curr.shop = sh.id and curr.month = 12
left join bills prev on prev.shop = sh.id and prev.month = 11
left join tenants te on sh.tenant= te.id

order by sh.order;


SELECT
sh.id as id,
sh.shop_number as shop_number,
te.name as shop_name,
sh."order" as list_order,
curr.elec_readings as current_elec,
prev.elec_readings as previous_elec,
(curr.elec_readings - prev.elec_readings) elec_diff,
curr.water_readings as current_water,
prev.water_readings as previous_water,
(curr.water_readings - prev.water_readings) water_diff



FROM shops sh
LEFT JOIN bills as curr
ON curr.shop = sh.id AND curr.month = 4 AND curr.year = 2023
LEFT JOIN bills as prev
ON prev.shop = sh.id AND prev.month = 2 AND prev.year = 2023
LEFT JOIN tenants te
ON te.id = sh.tenant
ORDER BY sh."order";



SELECT
sh.id as shop_id,
IFNULL(curr.id,"blank") as curr_bill_id,
IFNULL(prev.id,"blank") as prev_bill_id,

sh.shop_number as shop_number,
te.name as shop_name,
sh."order" as list_order,
IFNULL(curr.elec_readings,0) as current_elec,
IFNULL(prev.elec_readings,0) as previous_elec,
IFNULL((curr.elec_readings - prev.elec_readings),0) elec_diff,
IFNULL(curr.water_readings,0) as current_water,
IFNULL(prev.water_readings,0) as previous_water,
IFNULL((curr.water_readings - prev.water_readings),0)water_diff



FROM shops sh
LEFT JOIN bills as curr
ON curr.shop = sh.id AND curr.month = '6' AND curr.year = '2023'
LEFT JOIN bills as prev
ON prev.shop = sh.id AND prev.month = '7' AND prev.year = '2023'
LEFT JOIN tenants te
ON te.id = sh.tenant
ORDER BY sh."order";
