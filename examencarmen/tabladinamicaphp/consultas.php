Esta consulta muestra el primer pedido de cada mes de cada cliente. La consulta utiliza una subconsulta correlacionada en la cláusula WHERE para obtener la fecha mínima del pedido de cada mes del pedido actual y la función DATE_FORMAT para comparar solo el año y el mes. La consulta utiliza INNER JOIN para unir las tablas orders y customers y ORDER BY para ordenar los resultados por fecha de pedido.

Espero que este ejemplo adicional te sea útil. ¡Buena suerte en tu examen!

SELECT orders.order_id, orders.order_date, customers.first_name, customers.last_name
FROM orders
INNER JOIN customers ON orders.customer_id = customers.customer_id
WHERE orders.order_date = (
  SELECT MIN(order_date)
  FROM orders AS o
  WHERE DATE_FORMAT(o.order_date, '%Y-%m') = DATE_FORMAT(orders.order_date, '%Y-%m')
)
ORDER BY orders.order_date;


Esta consulta muestra los clientes que han realizado pedidos entre el 1 de enero de 2022 y el 31 de diciembre de 2022 y han comprado al menos 10 unidades de los productos 1 o 2. La consulta utiliza INNER JOIN para unir las tablas customers, orders y order_items y varias condiciones en la cláusula WHERE para filtrar los resultados.

Espero que este ejemplo adicional te sea útil. ¡Buena suerte en tu examen!

SELECT customers.customer_id, customers.first_name, customers.last_name, orders.order_id, orders.order_date, order_items.product_id, order_items.quantity
FROM customers
INNER JOIN orders ON customers.customer_id = orders.customer_id
INNER JOIN order_items ON orders.order_id = order_items.order_id
WHERE orders.order_date BETWEEN '2022-01-01' AND '2022-12-31'
AND (order_items.product_id = 1 OR order_items.product_id = 2)
AND order_items.quantity >= 10;

SELECT *
FROM orders
WHERE order_date = (
  SELECT MIN(order_date)
  FROM orders
)
LIMIT 10;


Consulta con INNER JOIN y subconsulta:
SELECT *
FROM customers
INNER JOIN (
  SELECT customer_id, COUNT(*) as total_orders
  FROM orders
  GROUP BY customer_id
) as order_counts
ON customers.customer_id = order_counts.customer_id
WHERE order_counts.total_orders > 5;


Consulta con subconsulta y ORDER BY:
SELECT *
FROM products
WHERE product_id NOT IN (
  SELECT product_id
  FROM order_items
)
ORDER BY price DESC;

Consulta con LEFT JOIN y COALESCE:

SELECT customers.customer_id, COALESCE(SUM(order_items.quantity), 0) as total_items_ordered
FROM customers
LEFT JOIN orders ON customers.customer_id = orders.customer_id
LEFT JOIN order_items ON orders.order_id = order_items.order_id
GROUP BY customers.customer_id;

Consulta con JOIN y subconsulta:

SELECT *
FROM customers
JOIN (
  SELECT customer_id, MAX(order_date) as last_order_date
  FROM orders
  GROUP BY customer_id
) as last_orders
ON customers.customer_id = last_orders.customer_id
WHERE customers.country = 'France';

Consulta con subconsulta correlacionada:

SELECT *
FROM products
WHERE price > (
  SELECT AVG(price)
  FROM products
  WHERE category = 'Electronics'
);

Consulta con UNION
SELECT customer_id, order_date
FROM orders
WHERE order_date BETWEEN '2022-01-01' AND '2022-02-01'
UNION
SELECT customer_id, order_date
FROM orders_archived
WHERE order_date BETWEEN '2022-01-01' AND '2022-02-01';

Consulta con GROUP BY y HAVING
SELECT product_id, COUNT(*) as total_orders
FROM order_items
GROUP BY product_id
HAVING total_orders > 100;

Consulta con JOIN:
SELECT *
FROM customers
JOIN orders ON customers.customer_id = orders.customer_id
WHERE customers.country = 'USA'
ORDER BY orders.order_date DESC;

Consulta con subconsulta:
SELECT *
FROM orders
WHERE customer_id IN (
  SELECT customer_id
  FROM customers
  WHERE country = 'Spain'
);
