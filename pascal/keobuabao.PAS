{$MODE OBJFPC}
program keobuabao;
uses crt, sysutils;
var p_op, m_op, demthang, demhoa, demthua : integer;
const neverstop = 1;

begin
    repeat
    begin
        try
        clrscr;
        write('So lan thang: '); writeln(demthang);
        write('So lan hoa: '); writeln(demhoa);
        write('So lan thua: '); writeln(demthua);
        writeln('-----------');
        writeln('1. Keo');
        writeln('2. Bua');
        writeln('3. Bao');
        write('Lua chon cua ban: '); readln(p_op);
        writeln('-----------');
        randomize;
        m_op := random(3);
            if p_op = 1 then
                begin
                    if m_op = 0 then
                        begin
                            writeln('Ban chon: Keo');
                            writeln('May chon: Keo');
                            writeln('=> Hoa');
                            demhoa := demhoa + 1;
                        end
                    else if m_op = 1 then
                        begin
                            writeln('Ban chon: Keo');
                            writeln('May chon: Bua');
                            writeln('=> May thang');
                            demthua := demthua + 1;
                        end
                    else if m_op = 2 then
                        begin
                            writeln('Ban chon: Keo');
                            writeln('May chon: Bao');
                            writeln('=> Ban thang');
                            demthang := demthang + 1;
                        end;
                end
            else if p_op = 2 then
                begin
                    if m_op = 0 then
                        begin
                            writeln('Ban chon: Bua');
                            writeln('May chon: Keo');
                            writeln('=> Ban thang');
                            demthang := demthang + 1;
                        end
                    else if m_op = 1 then
                        begin
                            writeln('Ban chon: Bua');
                            writeln('May chon: Bua');
                            writeln('=> Hoa');
                            demhoa := demhoa + 1;
                        end
                    else if m_op = 2 then
                        begin
                            writeln('Ban chon: Bua');
                            writeln('May chon: Bao');
                            writeln('=> May thang');
                            demthua := demthua + 1;
                        end;
                end
            else if p_op = 3 then
                begin
                    if m_op = 0 then
                        begin
                            writeln('Ban chon: Bao');
                            writeln('May chon: Keo');
                            writeln('=> May thang');
                            demthua := demthua + 1;
                        end
                    else if m_op = 1 then
                        begin
                            writeln('Ban chon: Bao');
                            writeln('May chon: Bua');
                            writeln('=> Ban thang');
                            demthang := demthang + 1;
                        end
                    else if m_op = 2 then
                        begin
                            writeln('Ban chon: Bao');
                            writeln('May chon: Bao');
                            writeln('=> Hoa');
                            demhoa := demhoa + 1;
                        end;
                end
            else
                begin
                    writeln('Nhap 1/2/3');
                end;
        except
            begin
                writeln('-----------');
                writeln('Nhap 1/2/3');
                readln;
            end;
        end;
        readln;
    end;
    until neverstop <> 1;
end.
