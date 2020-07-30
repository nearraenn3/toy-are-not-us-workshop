*** Settings ***
Resource    toys-r-not-us-g3-keywords.robot
Library    SeleniumLibrary
Test Setup    เปิดโครมไปที่หน้าเว็บ
Test Template    ซื้อ Scrabble
Test Teardown    ปิดหน้าเว็บ

*** Test Cases ***
ซื้อ Scrabble