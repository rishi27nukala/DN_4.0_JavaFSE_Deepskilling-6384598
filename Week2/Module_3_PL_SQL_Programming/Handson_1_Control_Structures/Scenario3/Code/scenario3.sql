CREATE TABLE Loans (
  LoanID     NUMBER PRIMARY KEY,
  CustomerID NUMBER,
  DueDate    DATE
);

INSERT INTO Loans VALUES (1, 1, SYSDATE + 10); 
INSERT INTO Loans VALUES (2, 2, SYSDATE + 45); 
INSERT INTO Loans VALUES (3, 3, SYSDATE + 5);  
INSERT INTO Loans VALUES (4, 4, SYSDATE - 1);  -- due date completed

COMMIT;

SELECT * FROM Loans;

BEGIN
  FOR loan_rec IN (
    SELECT LoanID, CustomerID, DueDate
    FROM Loans
    WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Customer ID ' || loan_rec.CustomerID ||
                         ' has a loan (Loan ID: ' || loan_rec.LoanID ||
                         ') due on ' || TO_CHAR(loan_rec.DueDate, 'DD-MON-YYYY'));
  END LOOP;
END;
/