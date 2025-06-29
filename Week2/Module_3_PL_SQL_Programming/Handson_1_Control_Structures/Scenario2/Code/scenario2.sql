ALTER TABLE Customers ADD (
  Balance NUMBER,
  IsVIP   VARCHAR2(5)
);

UPDATE Customers SET Balance = 12000 WHERE CustomerID = 1;
UPDATE Customers SET Balance = 8000 WHERE CustomerID = 2;
UPDATE Customers SET Balance = 15000 WHERE CustomerID = 3;
UPDATE Customers SET Balance = 9000 WHERE CustomerID = 4;
COMMIT;

SELECT * FROM Customers;

BEGIN
  FOR cust IN (SELECT CustomerID, Balance FROM Customers) LOOP
    IF cust.Balance > 10000 THEN
      UPDATE Customers
      SET IsVIP = 'TRUE'
      WHERE CustomerID = cust.CustomerID;
    ELSE
      UPDATE Customers
      SET IsVIP = 'FALSE'
      WHERE CustomerID = cust.CustomerID;
    END IF;
  END LOOP;

  COMMIT;
END;
/

SELECT * FROM Customers;
