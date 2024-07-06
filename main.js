// Slideshow banner
const listImage = document.querySelector('.banner_list');
const imgs = document.querySelectorAll('.banner_item');
const btnLeft = document.querySelector('.banner_btn-left');
const btnRight = document.querySelector('.banner_btn-right');
let current = 0;

const changeImage = () => {
    if (current == imgs.length - 1) {
        current = 0;
        let width = imgs[0].offsetWidth;
        listImage.style.transform = `translateX(0)`;
        document.querySelector('.banner_index-active').classList.remove('banner_index-active');
        document.querySelector('.banner_index-item-' + current).classList.add('banner_index-active');
    } else {
        current++;
        let width = imgs[0].offsetWidth;
        listImage.style.transform = `translateX(${width * -1 * current}px)`;
        document.querySelector('.banner_index-active').classList.remove('banner_index-active');
        document.querySelector('.banner_index-item-' + current).classList.add('banner_index-active');
    }
}

let eventChangeImage = setInterval(changeImage, 4000);

btnRight.addEventListener('click', () => {
    clearInterval(eventChangeImage);
    changeImage();
    eventChangeImage = setInterval(changeImage, 4000);
})

btnLeft.addEventListener('click', () => {
    clearInterval(eventChangeImage);
    if (current == 0) {
        current = imgs.length - 1;
        let width = imgs[0].offsetWidth;
        listImage.style.transform = `translateX(${width * -1 * current}px)`;
        document.querySelector('.banner_index-active').classList.remove('banner_index-active');
        document.querySelector('.banner_index-item-' + current).classList.add('banner_index-active');
    } else {
        current--;
        let width = imgs[0].offsetWidth;
        listImage.style.transform = `translateX(${width * -1 * current}px)`;
        document.querySelector('.banner_index-active').classList.remove('banner_index-active');
        document.querySelector('.banner_index-item-' + current).classList.add('banner_index-active');
    }
    eventChangeImage = setInterval(changeImage, 4000);
})



// List Products
const productsListBestSeller = [
    {
        "MaSP": 1,
        "TenSP": "Goodcharme Hue",
        "GiaBan": 690000,
        "DungTich": 90,
        "SoLuongTon": 143,
        "HinhSP": "/assets/images/products/028.png",
        "NgayThem": "2023-11-10T00:00:00",
        "MoTa": "Goodcharme Hue mang đến cho phái đẹp cảm giác trải nghiệm vừa mang nét truyền thống, vừa hiện đại biến tấu cùng thời cuộc với những hương thơm tươi mát và ngọt ngào, mang đậm phong cách tinh tế, thanh lịch lại còn toát lên vẻ sang trọng. Thân chai màu hồng da nhẹ nhàng cùng phần nắp chai màu vàng đồng làm toát lên hình ảnh một người phụ nữ dịu dàng hiền thục. Goodcharme Hue mang nét đẹp thanh lịch và sang trọng của người phụ nữ. Dù không có quá nhiều sự pha trộn trong mùi hương, tuy nhiên sự hài hòa và tinh tế giữa các hương vị tạo nên 3 tầng hương tuyệt vời.Mở đầu bằng hương thơm tươi mát của Cam Bergamot, dù là hương thơm không quá xa lạ với các tín đồ mê nước hoa nhưng cũng đủ để làm nổi bật nốt hương đầu của Goodcharme Hue. Tiếp đến, sự hòa quyện tinh tế giữa hương thơm dịu nhẹ của Hoa hồng Bungari và chút hương vị lạ của Iris làm các nàng phải chết mê chết mệt. Đây cũng được xem là tầng hương nổi bật nhất của Charme Huế. Khép lại chuỗi hương thơm tuyệt vời của siêu phẩm này là sự lên ngôi của hương vị ngọt ngào đến từ Vani, cùng một chút sự lan tỏa ngào ngạt của Hoắc hương và mùi da quen thuộc và mộc mạc.",
        "TenLoaiSP": "Nước hoa nữ"
    },
    {
        "MaSP": 2,
        "TenSP": "Goodcharme Man In White 50ML",
        "GiaBan": 1800000,
        "DungTich": 50,
        "SoLuongTon": 76,
        "HinhSP": "/assets/images/products/009.png",
        "NgayThem": "2023-11-09T00:00:00",
        "MoTa": "Nước hoa MAN IN WHITE 50ML sở hữu note hương Iso E Super, mang hơi thở đặc trưng của gỗ tuyết tùng. Sẽ là một điều khiến bạn ngạc nhiên khi hương gỗ trong nước hoa MAN IN WHITE lan tỏa nhẹ nhàng và trung tính, đủ để kích thích những tế bào khứu giác và tận hưởng sự tinh tế của mùi hương. Trong sự kết hợp này, bạn sẽ cảm nhận được một cảm giác trong veo và dễ gần nhờ vào sự hiện diện tinh tế của Amyl Salicylate từ lá bạc hà, một nốt hương thoang thoảng nhưng lại mê mẩn đến lạ người. Sự ngọt ngào của xạ hương và long diên hương, hòa quyện với sự thanh khiết và tươi mơn mởn của quả lê, tạo nên một sự kết hợp tinh tế và lôi cuốn. Những nốt hương này tạo ra một khí chất quyến rũ và cuốn hút, mê hoặc mọi người xung quanh. Vị ngọt đầy sáng tạo của xạ hương và long diên hương, cùng với sự tươi mát và thanh thoát của quả lê, kết hợp một cách khéo léo và tự nhiên. Những nốt hương này tạo nên một sự cuốn hút đặc biệt và tinh tế, mang lại một cảm giác quyến rũ không thể cưỡng lại. Mùi hương nuốt trọn mọi thứ xung quanh, mùi hương tưởng như kỳ lạ nhưng lại hấp dẫn đến không ngờ.",
        "TenLoaiSP": "Nước hoa nam"
    },
    {
        "MaSP": 3,
        "TenSP": "Goodcharme Perfect",
        "GiaBan": 950000,
        "DungTich": 100,
        "SoLuongTon": 43,
        "HinhSP": "/assets/images/products/003.png",
        "NgayThem": "2023-11-08T00:00:00",
        "MoTa": "Sản phẩm dành cho nam ở độ tuổi từ 22 tuổi trở lên, mang phong cách hiện đại, lịch lãm, thể hiện sự chững chạc của người trưởng thành điềm đạm và nhẹ nhàng, rất hợp cho các doanh nhân và nhân viên công chức, văn phòng, các bác sĩ, giáo viên,…. Hương thơm gây bất ngờ với phần mở đầu sắc nét bằng vị cay nhẹ nhàng giữa hạt tiêu đen và gia vị với nốt hương tươi mát của cam đỏ. Lớp hương nối tiếp tinh tế cùng hoa cam và hoa oải hương. Lớp nền đậm đà đặc sắc với rêu và gỗ đàn hương nồng nàn và ngọt ngào pha lẫn sexy đầy mơn trớn một cách nhẹ nhàng và lãng mạn.",
        "TenLoaiSP": "Nước hoa nam"
    },
    {
        "MaSP": 4,
        "TenSP": "Goodcharme GoodMen Vàng",
        "GiaBan": 690000,
        "DungTich": 50,
        "SoLuongTon": 87,
        "HinhSP": "/assets/images/products/005.png",
        "NgayThem": "2023-11-07T00:00:00",
        "MoTa": "Ngay từ những giây phút đầu tiên, chân dung của GoodMen Vàng đã hiện lên rất rõ: một người đàn ông đủ lịch lãm, đủ lôi cuốn nhưng không ưa cầu kỳ dỏm dáng. Là một mùi hương đủ an toàn cho cả bốn mùa nhưng cũng đủ lôi cuốn để bạn không trở nên nhàm chán. Và đây cũng là một mùi hương rất đẹp trên da các anh. Hương thơm nam tính của chai nước hoa GoodMen khiến nhiều Quý ông thích thú, muốn sở hữu ngay nó. Mở đầu bằng sự tươi mát hòa cùng chút cay nồng của Tiêu đen tạo nên một mùi hương tuy không quá lạ nhưng cũng đủ để làm nổi bật nốt hương đầu của GoodMen. Đến lớp hương giữa, sự ấm áp của gỗ tuyết tùng quyện cùng hương thơm phảng phất của cây xô thơm đủ để khiến các Quý ông cảm thấy mê mẩn. GoodMen đã vô cùng khéo léo khi khép lại hương vị tuyệt vời bằng sự ngọt ngào của Đậu Tonka và Ca cao, hòa cùng một chút ấm áp của Amberwood tạo ra một cái kết khó quên cho người dùng. Đúng như cái tên của mình, mới chỉ nhìn sơ qua vẻ ngoài ta đã dễ dàng thấy được độ GoodMen của nó. Gợi lên hình ảnh một người đàn ông mạnh mẽ và vô cùng lịch lãm. Ý tưởng chai lọ độc đáo với tông màu vàng gold vô cùng sang trọng và quyền quý, khiến nhiều tín đồ nước hoa bất ngờ và cảm thấy thích thú. Bên cạnh đó, hình ảnh nắp chai như chiếc nón quyền lực mà những vị vua sở hữu, đó được xem như biểu tượng của sức mạnh, sẵn sàng bộc phát để bao bọc và chở che cho người bạn khác giới của mình. Một số cạnh ở thân chai được mạ vàng cũng góp phần làm nổi bật siêu phẩm này.",
        "TenLoaiSP": "Nước hoa nam"
    },
    {
        "MaSP": 5,
        "TenSP": "Goodcharme Clever",
        "GiaBan": 650000,
        "DungTich": 50,
        "SoLuongTon": 23,
        "HinhSP": "/assets/images/products/021.png",
        "NgayThem": "2023-11-06T00:00:00",
        "MoTa": "Mùi hương thơm tạo nên nét đặc trưng của một người phụ nữ trẻ, tràn đầy sự sống, hồn nhiên và yêu đời. Những note hương tươi sáng của Quả lý chua đỏ được tẩm ướp cùng Hồng tiêu mang tới sự táo bạo trong cách chuyển mùi của cô nàng này, nhẹ nhàng nhưng đầy sự kiêu kỳ. GOODCHARME CLEVER mang trong mình cả một vườn hoa, với sự thanh tao của Hoa nhài, ngọt ngào của Hoa hồng và sự mong manh, tiểu thư của Hoa mẫu đơn, Cô nàng CLEVER với vẻ bề ngoài rất dễ thương, nhút nhát, nhưng khi chạm tới, Hương vị của hoa nhài sambat hòa cùng xạ hương, biến sự nữ tính đó trở thành vũ khí hấn dẫn mọi ánh nhìn, ấm áp và đầy thân thiện. Có thể nói đây là sản phẩm khá chủ đạo dành cho các cô gái trẻ trung năng động, thông minh và hoạt bát.",
        "TenLoaiSP": "Nước hoa nữ"
    },
    {
        "MaSP": 6,
        "TenSP": "Goodcharme Nhatrang",
        "GiaBan": 690000,
        "DungTich": 90,
        "SoLuongTon": 56,
        "HinhSP": "/assets/images/products/024.png",
        "NgayThem": "2023-11-05T00:00:00",
        "MoTa": "Nha Trang được mệnh danh là nơi có rất nhiều những danh lam thắng cảnh thu hút du khách với bãi tắm tuyệt đẹp, Mải mê chạy theo bờ cát trắng dịu êm, chạm tay vào làn nước trong xanh quanh năm, nghe từng thanh âm trong trẻo của thiên nhiên quyện chặt vào nhịp sống thành phố một cách hòa hợp, Nha Trang như chốn tâm tình dịu dàng giúp trút bỏ mọi gánh nặng trên vai. Hòn ngọc biển Đông như cô gái chân quê luôn giữ cho mình một nét đẹp vốn có nhưng cũng chẳng tụt hậu khi bắt kịp nét hiện đại để người cứ mãi ngẩn ngơ chìm vào thế giới đầy ma lực ấy. Chính vì thế Goodcharme Nhatrang chọn màu xanh ngọc cho sản phẩm thể hiện sự tươi mát của biển cả kết hợp với mùi hương của quả Lựu và quả Yuzu đang trôi trong hương thơm mát dịu của hương nước. Hương Sen thuần khiết hiện lên mang hồn cô gái Việt với vẻ đẹp dịu dàng, đằm thắm nhưng không kém phần thu hút. Mùi hương từ Mẫu đơn, Mộc lan hòa quyện cùng sự ấm áp của Xạ hương, Hổ phách cùng mùi Gỗ tạo nên cảm xúc lưu luyến không phai. Goodcharme Nhatrang khiến ta si mê bởi hương thơm được kết tinh từ những loại hoa trái rồi điểm thêm Xạ hương sạch sẽ tinh khôi đầy bay bổng. GoodCharme Nha Trang là mùi hương dễ yêu, tươi sáng và ngọt ngào, phù hợp với hình tượng của một quý cô chốn thành thị thanh lịch, dịu dàng và quyến rũ.",
        "TenLoaiSP": "Nước hoa nữ"
    },
    {
        "MaSP": 7,
        "TenSP": "Goodcharme GoodMen Xanh",
        "GiaBan": 690000,
        "DungTich": 50,
        "SoLuongTon": 65,
        "HinhSP": "/assets/images/products/004.png",
        "NgayThem": "2023-11-04T00:00:00",
        "MoTa": "Nước hoa nam GoodMen được lấy cảm hứng từ không gian rộng lớn của bầu trời xanh và núi đá dưới ánh mặt trời. Không đánh đố, không nguy hiểm, đó là mùi hương dễ yêu dễ hiểu của mối tình đầu, của chàng trai nhà bên, của một người đàn ông yêu biển cả, thân hình rắn rỏi trong chiếc áo sơ mi trắng dưới mặt trời mùa Hè. Tạo nên một sức cuốn hút thật mạnh mẽ từ một chút hoang dại, một chút lãng mạn với mùi hương chính là hương cam chanh thơm ngát. Thiết kế bao bì tinh xảo với các hoạ tiết quý phái giao hoà tông màu xanh đen pha trắng tôn lên vẻ sang trọng của sản phẩm, chai thuỷ tinh trong tông màu xanh đen tạo cảm giác bí ẩn và cuốn hút lạ thường cho bất cứ ai nhìn thấy GoodMen. GoodMen mở đầu hương thơm vô cùng độc đáo của Cam Bergamot và Hạt tiêu. Lớp hương tiếp theo là hương thơm của Hoa Oải hương và Cỏ hương bài tạo cảm giác nhẹ nhàng, lịch lãm. Lớp hương cuối là sự hoà quyện hoàn hảo và bất ngờ của Bách hương, hoa Labdanum và hương Ambroxan. Tất cả các hương của GoodMen kết hợp và bổ trợ cho nhau vô cùng tuyệt vời để tạo ra một chai nước hoa mới lạ nhưng không kém phần cuốn hút và mang một cá tính rất riêng. GoodMen là sự lựa chọn tuyệt vời cho những chàng chai yêu thích sự khám phá và tự do. Tất cả trong một chai vuông màu xanh thẫm tựa như giấc ngủ ở một tầng sâu nhất của biển cả, tựa như trời đêm ở một đô thị nào với mỗi toà nhà chọc trời là một nỗi lặng im.",
        "TenLoaiSP": "Nước hoa nam"
    },
    {
        "MaSP": 8,
        "TenSP": "Goodcharme Man In Black 50ML",
        "GiaBan": 1800000,
        "DungTich": 50,
        "SoLuongTon": 32,
        "HinhSP": "/assets/images/products/008.png",
        "NgayThem": "2023-11-03T00:00:00",
        "MoTa": "Nước hoa MAN IN BLACK 50ML có hương đầu mở ra bằng sự kết hợp của hoa cam và tiêu đen, tạo nên một sự hòa quyện hài hòa giữa hương ngọt và một chút nồng nàn. Nốt hương giữa của nước hoa mang đến phong cách và lôi cuốn với rượu Whisky và nguyệt quế. Mùi hương của rượu Whisky tạo ra sự nam tính và lịch lãm, trong khi nguyệt quế thêm một nét huyền bí và sâu lắng. Hương cuối đặc trưng bởi sự kết hợp độc đáo của hổ phách, long diên hương và muối biển. Hổ phách và long diên hương tạo nên sự ấm áp và thu hút, tạo ra một cảm giác nồng nàn và tinh tế. Muối biển mang đến một chút tươi mát và sự độc đáo cho mùi hương, tạo ra một sự cân bằng tuyệt vời giữa các thành phần khác nhau. Các nốt hương hòa quyện với nhau để lại ấn tượng mạnh mẽ và lôi cuốn trên da.",
        "TenLoaiSP": "Nước hoa nam"
    },
    {
        "MaSP": 9,
        "TenSP": "Goodcharme Vungtau",
        "GiaBan": 690000,
        "DungTich": 90,
        "SoLuongTon": 123,
        "HinhSP": "/assets/images/products/023.png",
        "NgayThem": "2023-11-02T00:00:00",
        "MoTa": "Nếu đến Vũng Tàu bạn sẽ làm gì? Là tìm kiếm cho mình một chốn nghỉ chân sau những ngày điên cuồng bạt mạng với những mục tiêu phấn đấu cho tương lai. Là kỳ nghỉ dài, lái xe dọc bờ biển nhìn ngắm trời nước mênh mang. Đến Vũng Tàu vì muốn tìm kiếm không gian xanh khiến tâm trí bình yên. Đó là những những gì người ta thường nghĩ đến Vũng Tàu. Vậy ở địa hạt hương thơm, Vũng Tàu có gieo mầm thương nhớ không ? Khám phá điều đó ngay trong nước hoa nữ Goodcharme Vungtau nhé! “Vì đất nước mình còn lạ, cần chi đâu nước ngoài. Đặt chân lên tất cả mọi miền là ước mơ ta ước hoài”. Thử một lần khám phá đất nước mình với con mắt của một kẻ mơ mộng, ngao du trên một mảnh đất lạ rồi giật mình nhận ra. Hóa ra Việt Nam dễ khiến ta “phải lòng” đến thế. Việt Nam với nhiều vùng đất xinh đẹp, nhiều thắng cảnh ấn tượng khiến ai một lần nhìn ngắm vẫn phải bồi hồi, nhớ nhung. Như Vũng Tàu chẳng hạn, vùng biển đẹp ấn tượng này luôn được “ân sủng” với cảnh quan đẹp mắt, làn nước biển trong xanh, thu hút nhiều khách du lịch quan tâm. Như là một món quà từ Goodcharme gửi đến bạn, nước hoa nữ Goodcharme Vungtau sẽ là thứ bằng chứng mạnh mẽ cho những ký ức của Vũng Tàu trong bạn. Đồng thời, thông qua tác phẩm thơm, GoodCharme còn muốn thể hiện tinh thần dân tộc hào hùng, lòng yêu nước sâu sắc. Mang những điều tuyệt vời của đất Việt thể hiện qua từng làn hương.",
        "TenLoaiSP": "Nước hoa nữ"
    },
    {
        "MaSP": 10,
        "TenSP": "Goodcharme Lavish",
        "GiaBan": 950000,
        "DungTich": 100,
        "SoLuongTon": 23,
        "HinhSP": "/assets/images/products/002.png",
        "NgayThem": "2023-11-01T00:00:00",
        "MoTa": "Nước hoa dành chon nam từ 18 tuổi trở lên mang phong cách quý tộc, người giàu sang, thể hiện là người hào phóng, thông thái phong nhã phù hợp phong cách ông chủ, doanh nhân, trưởng phòng, các vị lãnh đạo. Đây là sản phẩm được tạo nên bằng những nguyên liệu hương thơm cao cấp trong đó có cả long diên hương, hổ phách và xạ hương , rất hiếm các dòng nước hoa trên thế giới có được sản phẩm tổng hợp cả 3 thành phần này, bởi nó được ra để dành cho giới thượng lưu. Mở đầu là lớp hương cam bergamot của Ý đánh thức khứu giác để cuốn hút tiếp đến là lớp hoa hồng và nghệ tây nhẹ nhàng phản phất gây rung động và cuối cùng là lớp hương của hoắc hương và gỗ tuyết tùng tạo nên sự cuốn hút nồng nàn lưu giữ khó quên.",
        "TenLoaiSP": "Nước hoa nam"
    }
];

const productsListNew = [
    {
        "MaSP": 11,
        "TenSP": "Goodcharme Only Love",
        "GiaBan": 750000,
        "DungTich": 80,
        "SoLuongTon": 321,
        "HinhSP": "/assets/images/products/043.png",
        "NgayThem": "2023-10-27T00:00:00",
        "MoTa": "Lấy cảm hứng từ mật ngọt tình yêu, Charme Perfume đã mang đến “tình hương” ngọt ngào, trẻ trung đầy nữ tính thông qua hương nước hoa Good Charme Only Love. Mùi hương trong veo như hình ảnh của các cô gái đang yêu, càng ngửi càng thấy yêu, thấy như đang được cưng nựng âu yếm. Là những cung bậc cảm xúc của người đang yêu, Good Charme Only Love thể hiện rất tốt “bản tình ca” lãng mạn, có ngọt ngào, có sâu lắng, có thăng hoa. Tình yêu ở mẫu nước hoa Pháp dành cho người Việt Good Charme Only Love hiện lên trong lành, tự nhiên. Mùi yêu này “mặc” lên người các cô gái tuổi xuân thì tạo nên cảm xúc sâu đậm nhất khiến người ngửi phải tìm kiếm khắc khoải mãi không nguôi. Nước hoa Good Charme Only Love như một nàng hồng quá đỗi xinh đẹp và sang trọng. Không xuất hiện nồng nàn, cá tính mà thay vào đó là sự nhẹ nhàng với nhiều chi tiết, tầng hương tinh tế. Hơn nữa, vẻ ngoài của sản phẩm còn tạo hiệu ứng thẩm mỹ rất cao. Như một đóa hoa hồng ngậm nước, nở rộ trong mùa yêu thương. Cái tình yêu thể hiện thông qua Good Charme Only Love mang phong cách rất tự do, tươi mới, không mè nheo, nũng nịu. Thể hiện hình ảnh người con gái hiện đại, trẻ trung thông qua những tầng hương.",
        "TenLoaiSP": "Nước hoa nữ"
    },
    {
        "MaSP": 12,
        "TenSP": "Town Cliff",
        "GiaBan": 690000,
        "DungTich": 30,
        "SoLuongTon": 43,
        "HinhSP": "/assets/images/products/099.png",
        "NgayThem": "2023-10-27T00:00:00",
        "MoTa": "Town Cliff là dạng nước hoa ô tô, có thiết kế để hương thơm tự khuếch tán ra ngoài, mang lại mùi hương dịu nhẹ, thường được đặt trên taplo. Một bảo bối hoàn hảo để khử mùi xe hơi hiệu quả. Đồng thời còn có tác  dụng diệt khuẩn bay lơ lửng trong xe. Mỗi khi mở cửa lên xe, bạn sẽ cảm nhận thấy mùi hương thơm dịu, sảng khoái từ các loại hoa cỏ thay vì  mùi thuốc lá, mùi xe. Những người ngồi vào xe bạn chắc chắn sẽ phải trầm trồ “ôi sao xe thơm dịu quyến rũ vậy”... Sản phẩm kèm tấm pin năng lượng mặt trời, khi tiếp xúc ánh nắng sẽ tự chuyển động, sử dụng phương pháp khuếch tán tự nhiên và bay hơi chậm rãi trong xe, làm mới không khí, khử mùi hôi khó chịu. Ở lần đầu va chạm, ta có thể cảm nhận sự gần gũi, thân thuộc của hương biển mát tột đỉnh, thêm chút mát mẻ, tươi mới từ những loại trái cây màu hè như bưởi chùm, cam. Ở lớp hương giữa là thành phần hoa nhài, lá nguyệt quế tạo dấu hương lưu luyến khó quên. Còn có thêm hương gỗ guaiac, rêu sồi, hoắc hương trầm tính kết hợp cùng một chút long diên hương ở hương nền, để kết thúc hương nước hoa một cách hoàn thiện, đầy ngây ngất và để lại ấn tượng mạnh mẽ. Sản phẩm sở hữu công nghệ khử mùi hiệu quả cao và làm tươi mát không gian bên trong xe. Đây là dạng nước hoa ô tô phổ biến, có thiết kế để hương thơm tự khuếch tán ra ngoài, mang lại mùi hương dịu nhẹ, thường được đặt trên taplo. Người dùng chỉ cần mở nắp chai, sản phẩm sẽ tự tỏa ra mùi thơm nhẹ. Với hương thơm từ hoa cỏ tinh tế và thành phần thiên nhiên tốt cho sức khỏe, đây đích thị là chân ái giúp xe oto của bạn sang – sạch – thơm mát.",
        "TenLoaiSP": "Nước hoa xe hơi"
    },
    {
        "MaSP": 13,
        "TenSP": "Goodcharme Boy 50ML",
        "GiaBan": 150000,
        "DungTich": 50,
        "SoLuongTon": 76,
        "HinhSP": "/assets/images/products/088.png",
        "NgayThem": "2023-10-25T00:00:00",
        "MoTa": "Thiết kế của nước hoa GoodCharme Boy như vẽ lại những giấc mơ thần tiên trong thế giới trẻ thơ. Đó có thể là mơ ước trở thành Hoàng tử bé, mơ ước được trải nghiệm thế giới bên ngoài đầy màu sắc mà không bị kìm hãm. Đây là sản phẩm với hương thơm ấn tượng sẽ giúp bé yêu nhà bạn thoải mái hoạt động. Có thể cùng bé đi học, đi picnic cùng bạn bè. GoodCharme Boy là sự cân bằng hoàn hảo giữa nét thanh tao của hoa oải hương và vị cam bergamot ngọt ngào, cùng với đó là dấu ấn nam tính mạnh mẽ của hổ phách, long diên hương. Đây là dòng nước hoa nên độ lan tỏa ở mức vừa đủ, không quá mạnh mẽ gây gắt khó chịu. Vậy nên bé có thể sử dụng hằng ngày để tạo nên mùi hương đặc trưng của riêng mình. Nước hoa GoodCharme Boy  thiết kế tinh tế và đáng yêu vô cùng xinh xắn, giúp bé thêm phần thích thú khi sử dụng. Không khoa trương, không cầu kỳ, chai nước hoa này tiếp tục xoáy sâu vào những tầng hương dễ chịu, phù hợp cho mọi hoạt động của bé.",
        "TenLoaiSP": "Nước hoa trẻ em"
    },
    {
        "MaSP": 14,
        "TenSP": "Goodcharme Halong",
        "GiaBan": 690000,
        "DungTich": 90,
        "SoLuongTon": 423,
        "HinhSP": "/assets/images/products/032.png",
        "NgayThem": "2023-10-25T00:00:00",
        "MoTa": "Hạ Long như một bức tranh hoàn toàn sống động với muôn hình dáng lung linh huyền ảo. Đứng thả hồn mình với sóng nước mênh mông cùng với cảnh vật xung quanh ta ngỡ như đang lạc vào một thế giới thần tiên. Và chính Goodcharme Halong mang trong mình một những giấc mơ hoàn mỹ cũng như niềm khao khát về một tình yêu đầy hứa hẹn. Đầy ấn tượng với hương chanh tươi và gừng tươi, mang đến một sức sống căng tràn, thể hiện cá tính mạnh mẽ của một cô gái đôi mươi yêu đời. Tiếp đến, Goodcharme Halong đưa ta đến vẻ lãng mạn của tình yêu khi những đóa hồng nở rộ quyện vào sự tinh tế của mẫu đơn tạo nên một cảm giác bồi hồi khó tả. Để rồi như bao lần tỏa hương khác, xạ hương lại xuất hiện một cách bình dị hòa cùng hổ phách. Một tầng hương thoát tục, đưa tâm hồn lạc vào những dòng nước trong xanh in bóng những dãy đá vôi thơ mộng. Dù không sặc sỡ nhưng cũng đủ thu hút mọi ánh nhìn. Màu vàng cam trên thân chai như thể hiện sự giao thoa giữa sự quý phái và yêu đời của màu vàng và vẻ quyến rũ, nổi bật của màu cam. Charme Hạ Long là một mùi hương đậm chất duy mỹ và nền nã của thiên nhiên huyền diệu, quyến rũ và say đắm lòng người.",
        "TenLoaiSP": "Nước hoa nữ"
    },
    {
        "MaSP": 15,
        "TenSP": "Goodcharme Princess 50ML",
        "GiaBan": 150000,
        "DungTich": 50,
        "SoLuongTon": 23,
        "HinhSP": "/assets/images/products/057.png",
        "NgayThem": "2023-10-24T00:00:00",
        "MoTa": "Goodcharme Princess là dòng nước hoa mới của Good Charme mang phong cách điệu đà, nhẹ nhàng nhưng vô cùng quyến rũ và quý phái được ví như một công chúa , với thành phần tươi mới và phong phú của nó với mẫu chai tím pha lê ống ánh cùng khối lập thể tạo lên sự phá cách sang trọng tinh tế của sản phẩm. Mùi hương của Princess là một món quà tinh thần dành cho cho các bạn nữ yêu thích nhóm hương hoa trái cây và hoa cỏ. Mở đầu mùi hương mang mùi của các loại trái cây với hương vị đào mận, pha thêm chút táo và vị quế tương phản phong phú, đa dạng sẽ đưa bạn tới những chuyến hành trình khám phá đầy hương thơm cùng với vẻ đẹp bất ngờ đang chờ bạn khám phá. Hương thơm của những loài hoa ngọt ngào và nữ tính dần xuất hiện, sự tinh khiết của hoa lài, cùng với hoa hồng được bao bọc và vây chặt trong mùi hương hoa phong lữ Bourbon mềm mại, quyến rũ. Và đến cuối cùng sẽ tỏa sáng với sự gợi cảm của vani, trầm ấm của một dược, ngọt ngào của mật ong, tất cả cùng hòa quyện, đánh tan mọi sự khác biệt và cùng chạm đến đỉnh điểm của cảm xúc. Hương thơm phù hợp với mọi phong cách sử dụng như đi làm, đi chơi, đi tiệc hay đi dạo phố cùng bạn bè.",
        "TenLoaiSP": "Nước hoa nữ"
    },
    {
        "MaSP": 16,
        "TenSP": "Tinh dầu xả",
        "GiaBan": 379000,
        "DungTich": 30,
        "SoLuongTon": 42,
        "HinhSP": "/assets/images/products/113.png",
        "NgayThem": "2023-10-24T00:00:00",
        "MoTa": "Tinh dầu xả là một loại tinh dầu được chiết xuất từ thân và lá của cây sả, có mùi thơm thơm nồng, dễ chịu. Tinh dầu này được sử dụng rộng rãi trong nhiều lĩnh vực như chăm sóc sức khỏe, xông phòng,... Tinh dầu xả có mùi thơm thơm nồng, dễ chịu, đặc trưng của cây sả. Mùi hương này có thể giúp tinh thần thư giãn, giảm căng thẳng, mệt mỏi. Tinh dầu xả cũng có thể giúp kích thích cảm giác ngon miệng, tăng cường sự tỉnh táo. Xua đuổi muỗi, côn trùng: Tinh dầu xả có chứa các hợp chất citral và myrcene có tác dụng xua đuổi muỗi, côn trùng hiệu quả. Giảm căng thẳng, mệt mỏi: Mùi hương thanh mát của tinh dầu xả có thể giúp tinh thần thư giãn, giảm căng thẳng, mệt mỏi. Giúp ngủ ngon: Tinh dầu xả có tác dụng an thần, giúp ngủ ngon hơn. Giảm đau, hạ sốt: Tinh dầu xả có tác dụng giảm đau, hạ sốt hiệu quả. Tăng cường hệ miễn dịch: Tinh dầu xả có tác dụng tăng cường hệ miễn dịch, giúp cơ thể chống lại các tác nhân gây bệnh.",
        "TenLoaiSP": "Tinh dầu thiên nhiên"
    },
    {
        "MaSP": 17,
        "TenSP": "Dầu gội phủ bạc GoodCharme Nano Complex Color Shampoo",
        "GiaBan": 380000,
        "DungTich": 200,
        "SoLuongTon": 45,
        "HinhSP": "/assets/images/products/110.png",
        "NgayThem": "2023-10-20T00:00:00",
        "MoTa": "Dầu gội phủ bạc Nano Complex Color Shampoo là sản phẩm sinh ra với sứ mệnh trở thành tri kỷ của người tiêu dùng Việt, giúp tìm lại tuổi xuân, cho mái tóc suôn mềm, chắc khỏe. Với nền tảng vững chắc về công nghệ và chất lượng sản phẩm, GoodCharme tạo nên câu chuyện sản phẩm đặc biệt chỉ có ở Nano Complex Color Shampoo. Tóc bạc sớm khiến bạn khó chịu và tự ti với mọi người và vạn đã dùng rất nhiều sản phẩm nhưng chỉ là tạm thời không ngăn ngừa được hoàn toàn tóc bạc sớm. Bạn đang lo lắng không biết làm gì để cải thiện tình trạng này. Chúc mừng bạn, bạn sẽ không còn phải lo lắng về tình trạng “tóc bạc sớm” của mình nữa bởi vì đã có Dầu gội phủ bạc Nano Complex Color Shampoo – Giải pháp cho người tóc bạc, không cần nhuộm, không cần uống thuốc. Với mong muốn tạo ra một sản phẩm đột phá về chất lượng, về mùi hương, trở thành tri kỷ của người tiêu dùng Việt trong quá trình tạo nên một mái tóc đẹp. GoodCharme đã mất một hành trình dài để tìm hiểu và nghiên cứu về để rồi thổi hồn vào Nano Complex Color Shampoo không chỉ là mang đến giá trị thể chất giúp tạo màu tóc nâu đẹp tự nhiên mà sâu hơn là được cảm nhận sự chăm sóc chu đáo về tinh thần, cho bạn thêm tự tin với mái tóc đẹp mềm mượt, chắc khỏe. Sản phẩm được sản xuất với công nghê hiện đại, công thức tân tiến và được kiểm chứng lâm sàng nên rất an toàn. Mọi loại da đầu đều có thể sử dụng được. Đây không phải thuốc nhuộm, chỉ phủ màu đen tự nhiên lên phía ngoài thân tóc. Với phần an toàn từ thiên nhiên, dầu gội Nano Complex Color Shampoo ít có tác dụng phụ, giảm thiểu kích ứng cho da. Vừa giúp làm sạch và nuôi dưỡng tóc chắc khỏe, ngăn ngừa tóc bạc sớm, giúp tóc trở nên đen bóng, suôn mềm mượt. Bổ sung các thành phần dưỡng tóc,dưỡng ẩm cho mái tóc nuôi dưỡng mái tóc chắc khỏe từ bên trong. Sản phẩm không làm thay đổi cấu trúc tóc vì với cơ chế phủ màu vật lý bám màu trên sợi tóc không làm thay đổi sắc tố trong lõi tóc. Dầu gội chỉ bám màu vào tóc, không bám dính màu lên da đầu, dễ dàng rửa sạch ngay và không gây xót da đầu. Hương thơm tự nhiên, thư giãn, hoàn toàn thông thoáng da dầu sau khi gội. An toàn, lành tính với mái tóc người già, mẹ bầu sau khi sinh muốn gội phủ màu mái tóc. Lên màu nâu tự nhiên, đẹp bóng mượt. Mùi hương này cũng sẽ vương lên tóc, mang lại cảm giác tươi mát suốt cả ngày. Sản phẩm đảm bảo tiêu chuẩn cấp phép lưu hành theo quy định của Bộ Y Tế, rõ ràng về nguồn gốc xuất xứ sản phẩm.",
        "TenLoaiSP": "Chăm sóc toàn thân"
    },
    {
        "MaSP": 18,
        "TenSP": "Diamonds Love Yellow 50ML",
        "GiaBan": 250000,
        "DungTich": 50,
        "SoLuongTon": 54,
        "HinhSP": "/assets/images/products/054.png",
        "NgayThem": "2023-10-20T00:00:00",
        "MoTa": "Diamonds Love Yellow là một dòng nước hoa Unisex mang đậm nét tinh tế và quyến rũ, được thiết kế đặc biệt để mang đến sự tự tin và lôi cuốn cho cả nam và nữ. Với cảm giác tươi mát và sang trọng, đây là một hương thơm đặc biệt để bạn tỏa sáng trong mọi dịp. Diamonds Love Yellow là sự lựa chọn hoàn hảo cho những người muốn tạo nên ấn tượng mạnh mẽ và thể hiện phong cách đẳng cấp. Với tông màu vàng quý phái, đây không chỉ là một chai nước hoa mà còn là biểu tượng của sự sang trọng và cuốn hút. Diamonds Love Yellow là một mùi hương tinh tế và phong cách được kết hợp từ các thành phần độc đáo. Hương đầu của cam Bergamot, cỏ hương bài và diên vĩ đem lại sự tươi mát và sảng khoái khi bạn mới xịt nước hoa. Hương giữa của ngọc lan tây, hoa nhài và hoắc hương mang đến một sự quyến rũ và nồng nàn. Cuối cùng, hương cuối của nhựa cây bồ đề, rêu sồi, quế và đinh hương tạo nên một lớp mùi hương ấm áp và lưu hương lâu dài trên da. Với dung tích 10ml, Diamonds Love Yellow là một phiên bản nhỏ gọn và tiện lợi để mang theo bên mình trong mọi chuyến đi hay buổi hẹn quan trọng. Bạn có thể dễ dàng tạo ra một ấn tượng độc đáo và nổi bật với chỉ một chút hương thơm này.",
        "TenLoaiSP": "Nước hoa nữ"
    },
    {
        "MaSP": 19,
        "TenSP": "Goodcharme Good Men Xanh 50ML",
        "GiaBan": 150000,
        "DungTich": 50,
        "SoLuongTon": 12,
        "HinhSP": "/assets/images/products/015.png",
        "NgayThem": "2023-10-19T00:00:00",
        "MoTa": "Nước hoa nam Good Men Blue được lấy cảm hứng từ không gian rộng lớn của bầu trời xanh và núi đá dưới ánh mặt trời. Các tầng hương của Good Men kết hợp và bổ trợ cho nhau vô cùng tuyệt vời để tạo một chai nước hoa mới lạ nhưng không kém phần cuốn hút, mang một cá tính rất riêng. Good Men Blue là sự lựa chọn tuyệt vời cho những chàng trai yêu thích sự khám phá và tự do. Ý tưởng chai lọ độc đáo với tông màu xanh vô cùng sang trọng, quý phái, gợi lên hình ảnh một người đàn ông lịch lãm và nam tính.",
        "TenLoaiSP": "Nước hoa nam"
    },
    {
        "MaSP": 20,
        "TenSP": "Goodcharme Venus 50ML",
        "GiaBan": 150000,
        "DungTich": 50,
        "SoLuongTon": 23,
        "HinhSP": "/assets/images/products/071.png",
        "NgayThem": "2023-10-19T00:00:00",
        "MoTa": "Được ví như một nàng tiên xinh đẹp và gợi cảm cho mùi hương mang phong cách ấn tượng cuốn hút đầy mê hoặc của người con gái với chiếc mũ lệch nghiêng và bộ váy choàng vai cao rất sang trọng. Mùi hương là sự kết hợp giữa hoa hồng và hương hoa nhài cùng với hoa violet là tượng trưng cho sự mạnh mẽ, cá tính nhưng không kém phần quyến rũ, yêu kiều của một cô gái. Lớp đầu là mùi hương nhẹ nhàng, đằm thấm, tạo nên sự lãng mạn cho người dùng bởi hoa chanh vàng, hoa cam và hương hoa hồng. Hoa violet đã làm nền cho hương hoa hồng toát lên, nổi bậc hơn hẳn để thể hiện vai trò chủ đạo. Tiếp đến hương Cam Bergamot Calabria toát lên sự ngọt ngào nồng nàn và cuốn hút hơn, không những thế hoa mộc lan và hoa hồng Garsse, hoa hồng Bulgary cũng cùng nhau tỏa hương ở tầng thứ 2 mang lại cảm giác nhẹ nhàng dễ chịu và rất lãng mạn. Cuối cùng là sự nồng ấm của gỗ tuyết tùng và xạ hương là 2 thành phần chính sẽ lưu giữ lại cơ thể mang đến sự ấn tượng và tôn vinh nét đẹp tinh tế cho người phụ nữ.",
        "TenLoaiSP": "Nước hoa nữ"
    }
];

const productBestSeller = document.getElementById('product-best-seller');

productsListBestSeller.forEach(product => {
    const productHtml = `
        <div class="product-2-4">
            <div class="product-grid">
                <div class="product-image">
                    <a href="" class="image">
                        <img src="${product.HinhSP}" alt="${product.TenSP}">
                    </a>
                    <ul class="product-links">
                        <li>
                            <button type="button" onclick="addToCart(${product.MaSP})">
                                <i class="fa fa-shopping-cart"></i>
                            </button>
                        </li>
                        <li>
                            <a href="#"><i class="far fa-heart"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-search"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="product-content">
                    <ul class="rating">
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                    </ul>
                    <h3 class="title"><a href="#">${product.TenSP}</a></h3>
                    <div class="price">${product.GiaBan.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>
                </div>
            </div>
        </div>
    `;
    productBestSeller.innerHTML += productHtml;
});

const productNew = document.getElementById('product-new');

productsListNew.forEach(product => {
    const productHtml = `
        <div class="product-2-4">
            <div class="product-grid">
                <div class="product-image">
                    <a href="" class="image">
                        <img src="${product.HinhSP}" alt="${product.TenSP}">
                    </a>
                    <ul class="product-links">
                        <li>
                            <button type="button" onclick="addToCart(${product.MaSP})">
                                <i class="fa fa-shopping-cart"></i>
                            </button>
                        </li>
                        <li>
                            <a href="#"><i class="far fa-heart"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-search"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="product-content">
                    <ul class="rating">
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                    </ul>
                    <h3 class="title"><a href="#">${product.TenSP}</a></h3>
                    <div class="price">${product.GiaBan.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>
                </div>
            </div>
        </div>
    `;
    productNew.innerHTML += productHtml;
});
