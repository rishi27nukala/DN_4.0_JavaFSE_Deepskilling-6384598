CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Age NUMBER,
    LoanInterestRate NUMBER
);

INSERT INTO Customers VALUES (1, 'Tulasi', 65, 7.5);
INSERT INTO Customers VALUES (2, 'Nagendra', 45, 8.0);
INSERT INTO Customers VALUES (3, 'Devi', 70, 6.5);
INSERT INTO Customers VALUES (4, 'Ishita', 59, 9.0);

COMMIT;

BEGIN
  FOR cust IN (SELECT * FROM Customers WHERE Age > 60) LOOP
    UPDATE Customers
    SET LoanInterestRate = LoanInterestRate - 1
    WHERE CustomerID = cust.CustomerID;
  END LOOP;

  COMMIT;
END;
/
SELECT * FROM Customers;