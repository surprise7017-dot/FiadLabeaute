document.addEventListener('DOMContentLoaded', () => {
    // 모든 '구매하기' 버튼을 찾습니다.
    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // 버튼에 저장된 제품 ID를 가져옵니다.
            const productId = event.currentTarget.getAttribute('data-product-id');

            // 실제 결제 로직은 서버와 PG사 연동이 필요하지만, 여기서는 페이지 이동만 구현합니다.
            
            // payment.html로 이동하며, 제품 ID를 URL 파라미터로 넘겨줍니다.
            // 실제 상황에서는 이 단계에서 주문 정보를 서버에 먼저 전송합니다.
            window.location.href = `payment.html?product_id=${productId}`;
            
            console.log(`제품 ID: ${productId} 구매를 시작합니다.`);
            alert(`제품 ID ${productId}에 대한 결제 페이지(payment.html)로 이동합니다. (실제 결제 로직 필요)`);
        });
    });
});

/*
[추가적으로 필요한 파일]
1. payment.html: 결제 정보를 입력하고 PG사와 통신하는 페이지
2. admin_login.html: 관리자 ID/PW를 입력하는 로그인 페이지
3. admin.html: 동영상 업로드, 설명/가격 수정 등의 기능이 구현된 관리자 메인 페이지
*/
