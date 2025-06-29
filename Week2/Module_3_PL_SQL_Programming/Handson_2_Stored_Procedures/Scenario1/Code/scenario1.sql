CREATE TABLE SavingsAccounts (
  AccountID   NUMBER PRIMARY KEY,
  CustomerID  NUMBER,
  Balance     NUMBER
);

INSERT INTO SavingsAccounts VALUES (101, 1, 10000);
INSERT INTO SavingsAccounts VALUES (102, 2, 8500);
INSERT INTO SavingsAccounts VALUES (103, 3, 12000);
INSERT INTO SavingsAccounts VALUES (104, 4, 5600);
COMMIT;

SELECT * FROM SavingsAccounts;

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
  UPDATE SavingsAccounts
  SET Balance = Balance + (Balance * 0.01);
  
  DBMS_OUTPUT.PUT_LINE('Monthly interest applied to all savings accounts.');
END;
/

BEGIN
  ProcessMonthlyInterest;
END;
/

SELECT * FROM SavingsAccounts;