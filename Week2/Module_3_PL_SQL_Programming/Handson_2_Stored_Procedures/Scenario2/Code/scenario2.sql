CREATE TABLE Employees (
  EmployeeID   NUMBER PRIMARY KEY,
  Name         VARCHAR2(100),
  Department   VARCHAR2(50),
  Salary       NUMBER
);

INSERT INTO Employees VALUES (1, 'Kalyan', 'IT', 60000);
INSERT INTO Employees VALUES (2, 'Akira', 'HR', 48000);
INSERT INTO Employees VALUES (3, 'Anvitha', 'Sales', 50000);
INSERT INTO Employees VALUES (4, 'Juhi', 'Sales', 55000);
COMMIT;

SELECT * FROM Employees;

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  dept_name IN VARCHAR2,
  bonus_percent IN NUMBER
) AS
BEGIN
  UPDATE Employees
  SET Salary = Salary + (Salary * bonus_percent / 100)
  WHERE Department = dept_name;

  DBMS_OUTPUT.PUT_LINE('Bonus applied to ' || dept_name || ' department.');
END;
/
BEGIN
  UpdateEmployeeBonus('Sales', 10);
END;
/

SELECT * FROM Employees;