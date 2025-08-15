window.addEventListener("DOMContentLoaded", (event) => {

    const sheetDataHandler = (sheetData) => {
        console.log("sheet data: ", sheetData);
        for(let data of sheetData){
            let project_card = document.createElement('swiper-slide')

            let project_content = document.createElement('div')
            project_content.classList.add('swiper-slide-hover')

            let align_left = document.createElement('div')
            align_left.classList.add('left')
            let align_right = document.createElement('div')
            align_right.classList.add('right')

            let project_title = document.createElement('h3')
            project_title.innerHTML = data.title
            let detail_button = document.createElement('a')
            detail_button.classList.add('arrow-button')
            detail_button.innerHTML = 'Chi tiết'

            let detail_arrow = document.createElement('span')
            detail_arrow.classList.add('arrow')

            let project_image = document.createElement('img')
            project_image.setAttribute('src', data.link);
            project_image.setAttribute('alt', "")

            project_card.appendChild(project_content)
            project_content.appendChild(align_left)
            align_left.appendChild(project_title)
            project_content.appendChild(align_right)
            align_right.appendChild(detail_button)
            detail_button.appendChild(detail_arrow)
            project_card.appendChild(project_image)

            document.getElementById('Project_loop').appendChild(project_card);
        }
    };

    getSheetData({  
        sheetID: "1Fyj87M_RW7YZpbJcxj6ADSgju71KPKMQYKbmyECRk8w",
        sheetName: "Sheet1",
        query: "SELECT * where A is not null",
        callback: sheetDataHandler,
    });

});