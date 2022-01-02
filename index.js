customScript = {
    baseUrl: "",
    socials: {
        'facebook' : {
            "name" : "Facebook",
            "url" : "https://www.facebook.com/vikingcurvasud",
            "src" : "public/img/facebook-6-xxl.png",
            'class' : "w-6 rounded-full mr-3"
        },
        'twitter' : {
            "name" : "Twitter",
            "url" : "https://www.twitter.com/chaobianconerri",
            "src" : "public/img/twitter-3-xxl.png",
            'class' : "w-6 rounded-full mr-3"
        },
        'instagram' : {
            "name" : "Instagram",
            "url" : "https://www.instagram.com/kholis.cahyoko",
            "src" : "public/img/instagram-6-xxl.png",
            'class' : "w-6 rounded-full mr-3"
        },
        'linkedin' : {
            "name" : "LinkedIn",
            "url" : "https://www.linkedin.com/in/kholis-cahyoko-2455541a0",
            "src" : "public/img/linkedin-6-xxl.png",
            'class' : "w-6 rounded-full mr-3"
        },
        'wordpress' : {
            "name" : "Wordpress",
            "url" : "https://kholiscahyoko.my.id",
            "src" : "public/img/wordpress-6-xxl.png",
            'class' : "w-6 rounded-full mr-3"
        },
        'github' : {
            "name" : "Github",
            "url" : "https://github.com/kholiscahyoko",
            "src" : "public/img/github-8-xxl.png",
            'class' : "w-6 rounded-full"
        },
    },

    init : function(){
        var self = this;
        for (const socialKey in self.socials) {
            document.getElementById("social-links").appendChild(self.createSocialIcon(self.socials[socialKey]));
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