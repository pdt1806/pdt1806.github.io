program simple_interest;
uses crt;
var option : byte;
    principal, roi, simpi, year : real;
const never_stop_muahahaha = 1;
begin
    repeat
        clrscr;
        writeln('Calculate:');
        writeln('1. Simple Interest');
        writeln('2. Principal');
        writeln('3. Rate of Interest');
        writeln('4. Time');
	writeln('0. Exit program');
        write('Your option: '); readln(option);
        writeln('----------------');
        if option = 1 then
            begin
                write('Principal: '); readln(principal);
                write('Rate of Interest (%): '); readln(roi);
                write('Time (year(s)): '); readln(year);
                roi := roi / 100;
                simpi := principal * roi * year;
                writeln('---');
                writeln('Simple Interest: ', simpi:0:2);
                writeln('Total Investment: ', (simpi+principal):0:2);
            end
        else if option = 2 then
            begin
                write('Simple Interest: '); readln(simpi);
                write('Rate of Interest (%): '); readln(roi);
                write('Time (year(s)): '); readln(year);
                roi := roi / 100;
                principal := simpi / (roi * year);
                writeln('---');
                writeln('Principal: ', principal:0:2);
            end
        else if option = 3 then
            begin
                write('Simple Interest: '); readln(simpi);
                write('Principal: '); readln(principal);
                write('Time (year(s)): '); readln(year);
                roi := simpi / (principal * year);
                writeln('---');
                writeln('Rate of Interest (%): ', (roi*100):0:2);
            end
        else if option = 4 then
            begin
                write('Simple Interest: '); readln(simpi);
                write('Principal: '); readln(principal);
                write('Rate of Interest (%): '); readln(roi);
                roi := roi / 100;
                year := simpi / (principal * roi);
                writeln('---');
                writeln('Time (year(s)): ', year:0:2);
            end
		else if option = 0 then exit
        else writeln('Enter 1/2/3/4 !');
        readln;
    until never_stop_muahahaha <> 1;
end.
