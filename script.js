let defaultDate = new Date(2021, 7)
let box = $('#box')
let yearMonthDiv = null
let prevMonth = null
let nextMonth = null
let tBody = null
let allTd = []

//创建静态布局
create()


//显示当前日期对应的日历
// showDate()

function create() {
    let header = $(
        `
        <header>
            <span class='fl'>上个月</span>
            <span class='fr'>上个月</span>
            <div>2021年8月</div>
        </header>
        `);
    box.append(header)
    yearMonthDiv = header.find('div')
    prevMonth = header.find('.fl')
    nextMonth = header.find('.fr')

    let table = $(`
    <table width="100%" cellspacing='0' cellpadding='0'>
    <thead>
        <tr>
            <th class='red'>周日</th>
            <th>周一</th>
            <th>周二</th>
            <th>周三</th>
            <th>周四</th>
            <th>周五</th>
            <th>周六</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
    `);
    box.append(table)
    tBody = table.find('tbody')

    for (let i = 0; i < 6; i++) {
        let tr = $("<tr></tr>")
        for (let j = 0; j < 7; j++) {
            let td = $("<td>1</td>")
            tr.append(td)
            allTd.push(td)
        }
        tBody.append(tr)
    }

}