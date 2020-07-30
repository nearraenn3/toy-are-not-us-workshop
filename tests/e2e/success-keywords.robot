*** Variables ***
${URL}    shopping
${FULLNAME_TEXT}    Numlabyod Reprakan
${ADDRESS1_TEXT}    124 m.1 Phang Tru, Tha muang
${ADDRESS2_TEXT}    9 m.1 Phang Tru, Tha muang
${PROVINCE_TEXT}    Kanchanaburi
${POSTCODE_TEXT}    71110

*** Keywords ***
ซื้อ Scrabble
    [Arguments]    ${FULLNAME_TEXT}    ${ADDRESS1_TEXT}    ${ADDRESS2_TEXT}    ${PROVINCE_TEXT}    ${POSTCODE_TEXT}
    เปิดโครมไปที่หน้าเว็บ
    เลือกอายุ
    เลือกเพศ
    กดค้นหา
    เลือกสินค้า
    เช็ครายละเอียดสินค้าและเลือก shipping method
    ตรวจสอบสินค้าหน้า Shopping Cart
    กรอกที่อยู่    ${FULLNAME_TEXT}    ${ADDRESS1_TEXT}    ${ADDRESS2_TEXT}    ${PROVINCE_TEXT}    ${POSTCODE_TEXT}
    เช็คข้อมูลการสั่งซื้อสินค้าที่ Page Payment
    เลือกช่องทางการชำระเงิน
    เช็ครายละเอียดสินค้าครั้งสุดท้าย
    ปิดหน้าเว็บ
เปิดโครมเข้าไปที่หน้าเว็บ
    Open Browser    ${URL}    chrome
เลือกอายุ
    Click Element               id:age
    Wait Until Page Contains    over8
    Click Element               id:over_8
เลือกเพศ
    Click Element               id:gender
    Wait Until Page Contains    Neutral
    Click Element               id:Neutral
กดค้นหา
    Click Element    id:btn_search
เลือกสินค้า
    Sleep    3 seconds
    Mouse Down       id:toy_scrabble
    Click Element    id:toy_scrabble
เช็ครายละเอียดสินค้าและเลือก shipping method
    Wait Until Page Contains                          Scrabble
    Wait Until Element Contains    id:toy_brand       GeekToys
    Wait Until Element Contains    id:toy_price       $19.95
    Wait Until Element Contains    id:toy_stock       In Stock
    Wait Until Element Contains    id:toy_quantity    1
    Click Element                  id:btn_cart
ตรวจสอบสินค้าหน้า Shopping Cart
    Wait Until Page Contains       Shopping Cart
    Wait Until Page Contains       Scrabble
    Click Element                  id: toy_shipping
    Wait Until Page Contains       Kerry Express
    Click Element                  id:kerry_express
    Wait Until Element Contains    id:shipping_fee     ฿35.00
    Wait Until Element Contains    id:shipping_total   ฿35.00
    Click Element                  id:btn_checkout
กรอกที่อยู่
    [Arguments]    ${FULLNAME_TEXT}    ${ADDRESS1_TEXT}    ${ADDRESS2_TEXT}    ${PROVINCE_TEXT}    ${POSTCODE_TEXT}
    Wait Until Page Contains                Shipping Address
    Input Text       id:fullname            ${FULLNAME_TEXT}
    Input Text       id:address_1           ${ADDRESS1_TEXT}
    Input Text       id:address_2           ${ADDRESS2_TEXT}
    Input Text       id:province            ${PROVINCE_TEXT} 
    Input Text       id:postcode            ${POSTCODE_TEXT}
    Click Element    id:btn_addr_deliver
เช็คข้อมูลการสั่งซื้อสินค้าที่ Page Payment
    Wait Until Page Contains    Payment Methods
    Wait Until Element Contains    id:items           ฿628.43
    Wait Until Element Contains    id:shipping_fee    ฿35.00
    Wait Until Element Contains    id:order_total     ฿663.43
เลือกช่องทางการชำระเงิน
    Click Element               id:radiobtn_credit
    Wait Until Page Contains    VISA
    Click Element               id:radiobtn_credit_visa
    Click Element               id:btn_confirm_order
เช็ครายละเอียดสินค้าครั้งสุดท้าย
    Wait Until Page Contains    Thanks you
    Wait Until Element Contains    id:order_no                  20200730001
    Wait Until Element Contains    id:order_summary             ฿663.43
    Wait Until Element Contains    id:payment_method_details    VISA
    Sleep    3 seconds
ปิดหน้าเว็บ
    Close Browser