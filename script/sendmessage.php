<?php
    $content = '';
    foreach($_POST as $key => $value){
        $content .= "<b>$key</b>: <i>$value</i>\n";
    }
    if(trim($content)){
        $content = "<b>Message from Site: </b>\n" .$content;
        // bot token
        $apiToken = "8155002295:AAGwo21L6VQ0XRrGKSW4Qj9rb116stUuYog";
        $data = [
            'chat_id' => '@MaSendMessageBots',
            'text' => $content,
            'parse_mode' => 'HTML',
        ];
        $response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?".file_get_contents($data));
    }
?>