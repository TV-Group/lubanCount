import { delay } from 'roadhog-api-doc';

const result = [
    {
        theme: '呜呜呜呜',
        status: 'sendFail',
        sendTotle: 30,
        openTotal: 20,
        emailBack: 10,
        sendTime: '2019-07-10 20:10:20',
        id: 11,
    },
    {
        theme: '是是是',
        status: 'sendFail',
        sendTotle: 30,
        openTotal: 20,
        emailBack: 10,
        sendTime: '2019-07-10 20:10:20',
        id: 12,
    },
    {
        theme: '关于LED的描述,发光二极管简称为LED。由含镓（Ga）、砷（As）、磷（P）、氮（N）等的化合物制成。当电子与空穴复合时能辐射出可见光，因而可以用来制成发光二极管。在电路及仪器中作为指示灯，或者组成文字或数字显示。砷化镓二极管发红光，磷化镓二极管发绿光，碳化硅二极管发黄光，氮化镓二极管发蓝光。',
        status: 'sendFail',
        sendTotle: 30,
        openTotal: 20,
        emailBack: 10,
        sendTime: '2019-07-10 20:10:20',
        id: 13,
    },
    {
        theme: '关于LED的描述,发光二极管简称为LED。由含镓（Ga）、砷（As）、磷（P）、氮（N）等的化合物制成。当电子与空穴复合时能辐射出可见光，因而可以用来制成发光二极管。在电路及仪器中作为指示灯，或者组成文字或数字显示。砷化镓二极管发红光，磷化镓二极管发绿光，碳化硅二极管发黄光，氮化镓二极管发蓝光。',
        status: 'draftBox',
        sendTotle: 30,
        openTotal: 20,
        emailBack: 10,
        sendTime: '2019-07-10 20:10:20',
        id: 14,
    },
    {
        theme: '关于LED的描述,发光二极管简称为LED。由含镓（Ga）、砷（As）、磷（P）、氮（N）等的化合物制成。当电子与空穴复合时能辐射出可见光，因而可以用来制成发光二极管。在电路及仪器中作为指示灯，或者组成文字或数字显示。砷化镓二极管发红光，磷化镓二极管发绿光，碳化硅二极管发黄光，氮化镓二极管发蓝光。',
        status: 'sendSuccess',
        sendTotle: 30,
        openTotal: 20,
        emailBack: 10,
        sendTime: '2019-07-10 20:10:20',
        id: 15,
    },
    {
        theme: '关于LED的描述,发光二极管简称为LED。由含镓（Ga）、砷（As）、磷（P）、氮（N）等的化合物制成。当电子与空穴复合时能辐射出可见光，因而可以用来制成发光二极管。在电路及仪器中作为指示灯，或者组成文字或数字显示。砷化镓二极管发红光，磷化镓二极管发绿光，碳化硅二极管发黄光，氮化镓二极管发蓝光。',
        status: 'sendSuccess',
        sendTotle: 30,
        openTotal: 20,
        emailBack: 10,
        sendTime: '2019-07-10 20:10:20',
        id: 96,
    },
    {
        theme: '是我是我就是我就是我',
        status: 'sendSuccess',
        sendTotle: 30,
        openTotal: 20,
        emailBack: 10,
        sendTime: '2019-07-10 20:10:20',
        id: 16,
    },
    {
        theme: '关于LED的描述,发光二极管简称为LED。由含镓（Ga）、砷（As）、磷（P）、氮（N）等的化合物制成。当电子与空穴复合时能辐射出可见光，因而可以用来制成发光二极管。在电路及仪器中作为指示灯，或者组成文字或数字显示。砷化镓二极管发红光，磷化镓二极管发绿光，碳化硅二极管发黄光，氮化镓二极管发蓝光。',
        status: 'draftBox',
        sendTotle: 30,
        openTotal: 20,
        emailBack: 10,
        sendTime: '2019-07-10 20:10:20',
        id: 6,
    },
    {
        theme: '关于LED的描述,发光二极管简称为LED。由含镓（Ga）、砷（As）、磷（P）、氮（N）等的化合物制成。当电子与空穴复合时能辐射出可见光，因而可以用来制成发光二极管。在电路及仪器中作为指示灯，或者组成文字或数字显示。砷化镓二极管发红光，磷化镓二极管发绿光，碳化硅二极管发黄光，氮化镓二极管发蓝光。',
        status: 'sendSuccess',
        sendTotle: 30,
        openTotal: 20,
        emailBack: 10,
        sendTime: '2019-07-10 20:10:20',
        id: 17,
    },
    {
        theme: '关于LED的描述,发光二极管简称为LED。由含镓（Ga）、砷（As）、磷（P）、氮（N）等的化合物制成。当电子与空穴复合时能辐射出可见光，因而可以用来制成发光二极管。在电路及仪器中作为指示灯，或者组成文字或数字显示。砷化镓二极管发红光，磷化镓二极管发绿光，碳化硅二极管发黄光，氮化镓二极管发蓝光。',
        status: 'sendFail',
        sendTotle: 30,
        openTotal: 20,
        emailBack: 10,
        sendTime: '2019-07-10 20:10:20',
        id: 18,
    },
];


const emailReport = [
    {
        abuse: [],
        bounce: [],
        click: [],
        converse: [],
        email: '1159193863@qq.com',
        open: [
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        sent: [
            {
                isSuccess: 'true',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        unSub: [],
    },
    {
        abuse: [],
        bounce: [],
        click: [],
        converse: [],
        email: '1159193863@qq.com',
        open: [
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        sent: [
            {
                isSuccess: 'false',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        unSub: [],
    },
    {
        abuse: [],
        bounce: [],
        click: [],
        converse: [],
        email: '1159193863@qq.com',
        open: [
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        sent: [
            {
                isSuccess: 'true',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        unSub: [],
    },
    {
        abuse: [],
        bounce: [],
        click: [],
        converse: [],
        email: '1159193863@qq.com',
        open: [
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        sent: [
            {
                isSuccess: 'false',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        unSub: [],
    },
    {
        abuse: [],
        bounce: [],
        click: [],
        converse: [],
        email: '1159193863@qq.com',
        open: [
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        sent: [
            {
                isSuccess: 'true',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        unSub: [],
    },
    {
        abuse: [],
        bounce: [],
        click: [],
        converse: [],
        email: '1159193863@qq.com',
        open: [
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        sent: [
            {
                isSuccess: 'false',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        unSub: [],
    },
    {
        abuse: [],
        bounce: [],
        click: [],
        converse: [],
        email: '1159193863@qq.com',
        open: [
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        sent: [
            {
                isSuccess: 'true',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        unSub: [],
    },
    {
        abuse: [],
        bounce: [],
        click: [],
        converse: [],
        email: '1159193863@qq.com',
        open: [
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        sent: [
            {
                isSuccess: 'false',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        unSub: [],
    },
    {
        abuse: [],
        bounce: [],
        click: [],
        converse: [],
        email: '1159193863@qq.com',
        open: [
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        sent: [
            {
                isSuccess: 'true',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        unSub: [],
    },
    {
        abuse: [],
        bounce: [],
        click: [],
        converse: [],
        email: '1159193863@qq.com',
        open: [
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        sent: [
            {
                isSuccess: 'true',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        unSub: [],
    },
    {
        abuse: [],
        bounce: [],
        click: [],
        converse: [],
        email: '1159193863@qq.com',
        open: [
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        sent: [
            {
                isSuccess: 'false',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        unSub: [],
    },
    {
        abuse: [],
        bounce: [],
        click: [],
        converse: [],
        email: '1159193863@qq.com',
        open: [
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
            {
                RowNumber: '1',
                browser: 'Chrome',
                city: 'Shanghai',
                country: 'China',
                creative_id: '0',
                device: 'Android',
                email_opening_time: '2019-08-07T20:28:55.54+08:00',
                language: 'zh-CN(Simplified Chinese)',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        sent: [
            {
                isSuccess: 'false',
                sending_status_time: '2019-08-07T20:26:09.553+08:00',
                subscriber_email: '1159193863@qq.com',
            },
        ],
        unSub: [],
    },
];
const proxy = {
    // 邮件营销
    'POST /tonpalgs/getEmailSaleList': {
        code: 200,
        msg: '信息获取成功',
        total: 30,
        result,
    },
    // 邮件营销邮件数量
    'POST /tonpalgs/emailSaleNumber': {
        code: 200,
        msg: '信息获取成功',
        UsedEamil: 900,
        emailSaleTotal: 1000,
        availableEmail: 100,
    },
    // 邮件营销删除邮件
    'POST /tonpalgs/emailDelete': {
        code: 200,
        msg: '信息删除成功',
    },
    // 邮件报告初始化
    'POST /tonpalgs/getEmailInit': {
        code: 200,
        msg: '信息获取成功',
        emailSend: 500,
        emailDelivery: 450,
        emailOpen: 350,
        emailClick: 300,
        total: 30,
        result: emailReport,
    },
    // 邮件报告列表
    'POST /tonpalgs/getSubjectInfo': {
        code: 200,
        msg: '信息获取成功',
        emails: emailReport,
    },
    // 邮件详情列表
    'POST /tonpalgs/getSubjectDetail': {
        code: 200,
        msg: '信息获取成功',
        result: {
            fromEmail: 'guojinan@aiyongbao.com',
            fromName: 'terrence',
            id: '9',
            replyTo: '',
            subject: 'Hello , Please Check In',
            Status: 'Sent',
            campaignId: '86132',
            content: 'Hi, As we havent heard back from you in a while about this issue, we are assuming that this issue is resolved. ↵↵We will now be closing this ticket.↵↵In case you have any further issues, please reply to this email and it will reopen the ticket or if you have a new issue, you can always reach us at apisupport@fullcontact.com, and we will be glad to assist you.↵↵Have a great day!',
            createdate: '2019-08-07 20:23:40',
            emails: [
                '11591s93863@qq.com', '1159193863@qq.com', '1159193863@qq.com', '1159193863@qq.com', '11591a93863@qq.com', '1159193863@qq.com', '1159193863@qq.com', '1159193863@qq.com', '1159193863@qq.com', '1159193863@qq.com', '1159193863@qq.com', '1159193863@qq.com', '1159193863@qq.com', '1159193863@qq.com', '1159193863@qq.com', '1159193863@qq.com', '1159193863@qq.com', '1159193863@qq.com', '1159193863@qq.com', '1159193863@qq.com',
            ],
        },
    },
};

// 调用 delay 函数，统一处理
export default delay(proxy, 1000);
