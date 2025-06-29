CREATE OR REPLACE PROCEDURE TransferToSavings (
    p_customer_id IN NUMBER,
    p_savings_account_id IN NUMBER,
    p_amount IN NUMBER
) AS
    v_customer_balance NUMBER;
BEGIN

    SELECT Balance INTO v_customer_balance
    FROM Customers
    WHERE CustomerID = p_customer_id;


    IF v_customer_balance < p_amount THEN
        DBMS_OUTPUT.PUT_LINE('Error: Insufficient funds in main balance.');
        RETURN;
    END IF;


    UPDATE Customers
    SET Balance = Balance - p_amount
    WHERE CustomerID = p_customer_id;


    UPDATE SavingsAccounts
    SET Balance = Balance + p_amount
    WHERE AccountID = p_savings_account_id
      AND CustomerID = p_customer_id;

    DBMS_OUTPUT.PUT_LINE('Funds transferred successfully.');
END;
/

BEGIN
  TransferToSavings(1, 101, 3000);
END;

SELECT * FROM Customers;
SELECT * FROM SavingsAccounts;
