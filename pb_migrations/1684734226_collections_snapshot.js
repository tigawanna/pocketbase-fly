migrate((db) => {
  const snapshot = [
    {
      "id": "5sckr8a13top3zs",
      "created": "2023-05-02 16:08:51.003Z",
      "updated": "2023-05-12 10:12:09.890Z",
      "name": "devs",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "dhr1v7xa",
          "name": "avatar",
          "type": "url",
          "required": false,
          "unique": false,
          "options": {
            "exceptDomains": null,
            "onlyDomains": null
          }
        },
        {
          "system": false,
          "id": "jojjscns",
          "name": "access_token",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "jyr6ydsa",
          "name": "bio",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": 300,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "xi9j9mna",
          "name": "github_login",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "updbaxba",
          "name": "github_avatar",
          "type": "url",
          "required": false,
          "unique": false,
          "options": {
            "exceptDomains": null,
            "onlyDomains": null
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `_5sckr8a13top3zs_created_idx` ON `devs` (`created`)"
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": "",
      "updateRule": "@request.auth.id = id",
      "deleteRule": null,
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "requireEmail": false
      }
    },
    {
      "id": "4wcaptlpivjve1o",
      "created": "2023-05-02 16:08:51.004Z",
      "updated": "2023-05-02 16:08:51.004Z",
      "name": "reactions",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "nyreyfss",
          "name": "post",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "collectionId": "vbse1l0qet8z4hu",
            "cascadeDelete": true,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        },
        {
          "system": false,
          "id": "sgwol8dx",
          "name": "user",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "collectionId": "5sckr8a13top3zs",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        },
        {
          "system": false,
          "id": "iyckrxwp",
          "name": "liked",
          "type": "select",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "yes",
              "no"
            ]
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `_4wcaptlpivjve1o_created_idx` ON `reactions` (`created`)",
        "CREATE UNIQUE INDEX `one_user_one_post_reaction_unq_idx` ON `reactions` (`user`, `post`)"
      ],
      "listRule": "@request.auth.id !=\"\"",
      "viewRule": "@request.auth.id !=\"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id = user",
      "deleteRule": "@request.auth.id = user",
      "options": {}
    },
    {
      "id": "7yy4zq0mtyj546q",
      "created": "2023-05-02 16:08:51.004Z",
      "updated": "2023-05-18 16:31:12.757Z",
      "name": "listings",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "ct5jlmc1",
          "name": "location",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "hequmbjq",
          "name": "longitude",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null
          }
        },
        {
          "system": false,
          "id": "mscg4qnn",
          "name": "latitude",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null
          }
        },
        {
          "system": false,
          "id": "ku9pmjwv",
          "name": "description",
          "type": "editor",
          "required": true,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "jy0rpgvz",
          "name": "images",
          "type": "file",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 6,
            "maxSize": 10000000,
            "mimeTypes": [
              "image/jpeg",
              "image/svg+xml",
              "image/webp",
              "image/avif",
              "image/png"
            ],
            "thumbs": [
              "100x50"
            ],
            "protected": false
          }
        },
        {
          "system": false,
          "id": "puxitxtb",
          "name": "amenities",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "mjurykbj",
          "name": "owner",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "wbq0qz1adwxte2v",
            "cascadeDelete": true,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        },
        {
          "system": false,
          "id": "tyupnwkg",
          "name": "price",
          "type": "number",
          "required": true,
          "unique": false,
          "options": {
            "min": 1000,
            "max": null
          }
        },
        {
          "system": false,
          "id": "22cenzje",
          "name": "status",
          "type": "select",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "available",
              "sold"
            ]
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `_7yy4zq0mtyj546q_created_idx` ON `listings` (`created`)"
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": "@request.auth.id = \"9iry10stpabe2s3\"",
      "updateRule": "@request.auth.id = \"9iry10stpabe2s3\"",
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "wbq0qz1adwxte2v",
      "created": "2023-05-02 16:08:51.004Z",
      "updated": "2023-05-02 16:08:51.004Z",
      "name": "owner",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "pznsoolh",
          "name": "name",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "omxfuzkg",
          "name": "email",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "pdigrvmr",
          "name": "phone",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "lqsy1cwf",
          "name": "location",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "oib2hqxr",
          "name": "image",
          "type": "file",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/webp",
              "image/avif"
            ],
            "thumbs": [],
            "protected": false
          }
        },
        {
          "system": false,
          "id": "agx1poi4",
          "name": "whatsapp",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `_wbq0qz1adwxte2v_created_idx` ON `owner` (`created`)"
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "dlvnttlfiw585jv",
      "created": "2023-05-02 16:08:51.004Z",
      "updated": "2023-05-02 16:08:51.004Z",
      "name": "staff",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "fmalwmlx",
          "name": "name",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "waydpv0j",
          "name": "type",
          "type": "select",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "caretaker",
              "manager",
              "cashier"
            ]
          }
        },
        {
          "system": false,
          "id": "reee5uks",
          "name": "avatar",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif",
              "image/webp"
            ],
            "thumbs": [],
            "protected": false
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `_dlvnttlfiw585jv_created_idx` ON `staff` (`created`)"
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "requireEmail": false
      }
    },
    {
      "id": "ipamtot35z4hzln",
      "created": "2023-05-02 16:08:51.004Z",
      "updated": "2023-05-02 16:08:51.004Z",
      "name": "tasks",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "y0sqha6o",
          "name": "title",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "izgg4tl4",
          "name": "description",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "zthv4wjs",
          "name": "type",
          "type": "select",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "todo",
              "repairs",
              "maintenance",
              "recurring",
              "other"
            ]
          }
        },
        {
          "system": false,
          "id": "uqxndxjp",
          "name": "status",
          "type": "select",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "created",
              "approved",
              "funded",
              "in_progress",
              "completed",
              "rejected"
            ]
          }
        },
        {
          "system": false,
          "id": "j2fo7wxy",
          "name": "created_by",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "collectionId": "dlvnttlfiw585jv",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": [
              "id",
              "name",
              "email",
              "type"
            ]
          }
        },
        {
          "system": false,
          "id": "ei90l0ws",
          "name": "updated_by",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "dlvnttlfiw585jv",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": [
              "id",
              "email",
              "name",
              "type"
            ]
          }
        },
        {
          "system": false,
          "id": "nr8rurzo",
          "name": "approved_by",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "dlvnttlfiw585jv",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": [
              "id",
              "name",
              "email",
              "type"
            ]
          }
        },
        {
          "system": false,
          "id": "y9jjspvw",
          "name": "funded_by",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "dlvnttlfiw585jv",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": [
              "id",
              "name",
              "email",
              "type"
            ]
          }
        },
        {
          "system": false,
          "id": "rn68vmy9",
          "name": "marked_completed_by",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "dlvnttlfiw585jv",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": [
              "id",
              "name",
              "email",
              "type"
            ]
          }
        },
        {
          "system": false,
          "id": "ri9ar2il",
          "name": "approved_on",
          "type": "date",
          "required": false,
          "unique": false,
          "options": {
            "min": "",
            "max": ""
          }
        },
        {
          "system": false,
          "id": "gtuhofsf",
          "name": "funded_on",
          "type": "date",
          "required": false,
          "unique": false,
          "options": {
            "min": "",
            "max": ""
          }
        },
        {
          "system": false,
          "id": "g0uynztr",
          "name": "completed_on",
          "type": "date",
          "required": false,
          "unique": false,
          "options": {
            "min": "",
            "max": ""
          }
        },
        {
          "system": false,
          "id": "xzdiohq5",
          "name": "quotation",
          "type": "url",
          "required": false,
          "unique": false,
          "options": {
            "exceptDomains": null,
            "onlyDomains": null
          }
        },
        {
          "system": false,
          "id": "ipvlo4ew",
          "name": "deadline",
          "type": "date",
          "required": false,
          "unique": false,
          "options": {
            "min": "",
            "max": ""
          }
        },
        {
          "system": false,
          "id": "9xrufzdl",
          "name": "frequency",
          "type": "select",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "once",
              "daily",
              "weekly",
              "monthly",
              "yearly",
              "never"
            ]
          }
        },
        {
          "system": false,
          "id": "s4ekw8ta",
          "name": "rejected_by",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "dlvnttlfiw585jv",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        },
        {
          "system": false,
          "id": "zbtckw3m",
          "name": "marked_in_progress_by",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "dlvnttlfiw585jv",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        },
        {
          "system": false,
          "id": "zumfzjii",
          "name": "rejected_on",
          "type": "date",
          "required": false,
          "unique": false,
          "options": {
            "min": "",
            "max": ""
          }
        },
        {
          "system": false,
          "id": "6k9m6xw8",
          "name": "marked_in_progress_on",
          "type": "date",
          "required": false,
          "unique": false,
          "options": {
            "min": "",
            "max": ""
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `_ipamtot35z4hzln_created_idx` ON `tasks` (`created`)"
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": "@request.auth.id != ''",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id = created_by",
      "options": {}
    },
    {
      "id": "m1ibf55enmz09s6",
      "created": "2023-05-02 16:08:51.004Z",
      "updated": "2023-05-02 16:08:51.004Z",
      "name": "staff_details",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "amgzgsyb",
          "name": "leave_type",
          "type": "select",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "sick",
              "annual",
              "maternity",
              "other"
            ]
          }
        },
        {
          "system": false,
          "id": "qpiypjda",
          "name": "leave_reason",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "dndpvrvi",
          "name": "leave_start",
          "type": "date",
          "required": true,
          "unique": false,
          "options": {
            "min": "",
            "max": ""
          }
        },
        {
          "system": false,
          "id": "nrxd9qje",
          "name": "leave_end",
          "type": "date",
          "required": true,
          "unique": false,
          "options": {
            "min": "",
            "max": ""
          }
        },
        {
          "system": false,
          "id": "098ztc3e",
          "name": "leave_requested_by",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "collectionId": "dlvnttlfiw585jv",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        },
        {
          "system": false,
          "id": "vxzs46go",
          "name": "leave_approved_by",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "dlvnttlfiw585jv",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        },
        {
          "system": false,
          "id": "gb5bsf0g",
          "name": "leave_request_status",
          "type": "select",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "pending",
              "approved",
              "rejected"
            ]
          }
        },
        {
          "system": false,
          "id": "uhbyozvu",
          "name": "remaining_leave_days",
          "type": "number",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null
          }
        },
        {
          "system": false,
          "id": "5oas8t2i",
          "name": "remaining_sick_leave_days",
          "type": "number",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null
          }
        },
        {
          "system": false,
          "id": "ntfblnvy",
          "name": "leave_approved_on",
          "type": "date",
          "required": false,
          "unique": false,
          "options": {
            "min": "",
            "max": ""
          }
        }
      ],
      "indexes": [],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id !=\"\"",
      "deleteRule": "@request.auth.id = leave_requested_by",
      "options": {}
    },
    {
      "id": "q2inux1nn05ynut",
      "created": "2023-05-02 16:08:51.004Z",
      "updated": "2023-05-02 16:08:51.004Z",
      "name": "notifications",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "kelbeaib",
          "name": "name",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "hae7wpnb",
          "name": "details",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "yynsrfb8",
          "name": "source",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "dlvnttlfiw585jv",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        },
        {
          "system": false,
          "id": "egyvcnlj",
          "name": "item_id",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "ydn6fxof",
          "name": "type",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        }
      ],
      "indexes": [],
      "listRule": "",
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "zb1etrv0i3olw5p",
      "created": "2023-05-02 16:08:51.004Z",
      "updated": "2023-05-02 16:08:51.004Z",
      "name": "shops",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "gxrtdnqd",
          "name": "tenant",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "collectionId": "6ur1ivky21zygnv",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        },
        {
          "system": false,
          "id": "jobum3wf",
          "name": "shop_number",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "6ula4sjf",
          "name": "supa_tenant",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "fxuqtyg7",
          "name": "utils",
          "type": "select",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "elec",
              "water",
              "both"
            ]
          }
        },
        {
          "system": false,
          "id": "ijqtrydc",
          "name": "order",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null
          }
        },
        {
          "system": false,
          "id": "scid5awp",
          "name": "supa_id",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "54slue9t",
          "name": "is_vacant",
          "type": "bool",
          "required": false,
          "unique": false,
          "options": {}
        }
      ],
      "indexes": [],
      "listRule": "@request.auth.verified = true && @request.auth.type=\"manager\"",
      "viewRule": "@request.auth.verified = true && @request.auth.type=\"manager\"",
      "createRule": "@request.auth.verified = true && @request.auth.type=\"manager\"",
      "updateRule": "@request.auth.verified = true && @request.auth.type=\"manager\"",
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "6ur1ivky21zygnv",
      "created": "2023-05-02 16:08:51.004Z",
      "updated": "2023-05-02 16:08:51.004Z",
      "name": "tenants",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "yftha1iw",
          "name": "name",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "x14tvags",
          "name": "contact",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "qmf82vnc",
          "name": "email",
          "type": "email",
          "required": false,
          "unique": false,
          "options": {
            "exceptDomains": null,
            "onlyDomains": null
          }
        },
        {
          "system": false,
          "id": "v82vtz0g",
          "name": "details",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "cxbf8brr",
          "name": "supa_id",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        }
      ],
      "indexes": [],
      "listRule": "@request.auth.verified = true && @request.auth.type=\"manager\"",
      "viewRule": "@request.auth.verified = true && @request.auth.type=\"manager\"\n",
      "createRule": "@request.auth.verified = true && @request.auth.type=\"manager\"",
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "cvtakohtxaagiat",
      "created": "2023-05-02 16:08:51.004Z",
      "updated": "2023-05-02 16:08:51.004Z",
      "name": "bills",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "dfbbwmy1",
          "name": "shop",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "collectionId": "zb1etrv0i3olw5p",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        },
        {
          "system": false,
          "id": "pgqw1q5j",
          "name": "elec_readings",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null
          }
        },
        {
          "system": false,
          "id": "mgmpe07w",
          "name": "water_readings",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null
          }
        },
        {
          "system": false,
          "id": "z9zcyynw",
          "name": "month",
          "type": "number",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null
          }
        },
        {
          "system": false,
          "id": "nyjjvpyp",
          "name": "year",
          "type": "number",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null
          }
        }
      ],
      "indexes": [],
      "listRule": "@request.auth.verified = true && @request.auth.type=\"manager\"",
      "viewRule": "@request.auth.verified = true && @request.auth.type=\"manager\"",
      "createRule": "@request.auth.verified = true && @request.auth.type=\"manager\"",
      "updateRule": "@request.auth.verified = true && @request.auth.type=\"manager\"",
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "vbse1l0qet8z4hu",
      "created": "2023-05-02 16:08:51.004Z",
      "updated": "2023-05-03 17:50:48.836Z",
      "name": "posts",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "a0u9jwo7",
          "name": "body",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": 300,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "ny6krdw9",
          "name": "media",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpg",
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif"
            ],
            "thumbs": [],
            "protected": false
          }
        },
        {
          "system": false,
          "id": "ijbw4tgl",
          "name": "user",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "collectionId": "5sckr8a13top3zs",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        },
        {
          "system": false,
          "id": "kdr3guxa",
          "name": "parent",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "vbse1l0qet8z4hu",
            "cascadeDelete": true,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        },
        {
          "system": false,
          "id": "ondkz2dc",
          "name": "depth",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `_vbse1l0qet8z4hu_created_idx` ON `posts` (`created`)"
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": "@request.auth.id = \"\"",
      "updateRule": "@request.auth.id = user",
      "deleteRule": "@request.auth.id = user",
      "options": {}
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
