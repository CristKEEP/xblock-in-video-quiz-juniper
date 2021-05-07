// Curly braces are all doubled because this file gets called and formatted by python

var InVideoQuizXBlock = InVideoQuizXBlock || {{}};

(function () {{
    InVideoQuizXBlock.config = InVideoQuizXBlock.config || {{}};

    var videoId = '{video_id}';
    try {{
        
        if (videoId) {{
            InVideoQuizXBlock.config[videoId] = JSON.parse(`{timemap}`);
        }}
    }}
    catch {{
        
    }}
}}());
