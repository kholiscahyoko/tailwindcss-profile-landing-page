customScript = {
    baseUrl: "",
    socials: {
        'facebook' : {
            "name" : "Facebook",
            "url" : "https://www.facebook.com/vikingcurvasud",
            "src" : "https://www.iconsdb.com/icons/preview/gray/facebook-xxl.png",
            'class' : "w-6 border-2 p-1 rounded-full mr-3"
        },
        'twitter' : {
            "name" : "Twitter",
            "url" : "https://www.twitter.com/chaobianconerri",
            "src" : "https://www.iconsdb.com/icons/preview/gray/twitter-xxl.png",
            'class' : "w-6 border-2 p-1 rounded-full mr-3"
        },
        'instagram' : {
            "name" : "Instagram",
            "url" : "https://www.instagram.com/kholis.cahyoko",
            "src" : "https://www.iconsdb.com/icons/preview/gray/instagram-6-xxl.png",
            'class' : "w-6 border-2 p-1 rounded-full mr-3"
        },
        'linkedin' : {
            "name" : "LinkedIn",
            "url" : "https://www.linkedin.com/in/kholis-cahyoko-2455541a0",
            "src" : "https://www.iconsdb.com/icons/preview/gray/linkedin-6-xxl.png",
            'class' : "w-6 border-2 p-1 rounded-full mr-3"
        },
        'github' : {
            "name" : "Github",
            "url" : "https://github.com/kholiscahyoko",
            "src" : "https://www.iconsdb.com/icons/preview/gray/github-6-xxl.png",
            'class' : "w-6 border-2 p-1 rounded-full"
        },
    },

    init : function(){
        var self = this;
        for (const socialKey in self.socials) {

            console.log(self.socials[socialKey]);
            document.getElementById("social-links").appendChild(self.createSocialIcon(self.socials[socialKey]));
            // if (Object.hasOwnProperty.call(object, key)) {
            //     const element = object[key];
                
            // }
        }
    },

    createSocialIcon: function(obj){
        node = document.createElement("img");
        node.src = obj.src;
        node.alt = obj.name;
        node.className = obj.class;
        node.onclick = function(){
            window.open(obj.url);
        };
        return node;
    }
}