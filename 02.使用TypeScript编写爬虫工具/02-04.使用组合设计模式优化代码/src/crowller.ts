import fs from 'fs';
import path from 'path';
import superagent from 'superagent';
import LeeAnalyzer from './leeAnalyzer';

export interface Analyzer {
    analyze: (html: string, filePath: string) => string;
}

class Crowller {
    constructor(private url: string, private analyzer: Analyzer) {
        this.initSpiderProcess();
    }

    private filePath = path.resolve(__dirname, '../data/course.json');

    async getRawHtml() {
        const result = await superagent.get(this.url);
        return result.text;
    }

    writeFile(content: string) {
        fs.writeFileSync(this.filePath, content);
    }

    async initSpiderProcess() {
        // 获取网站数据
        const html = await this.getRawHtml();
        // 这里没有分析html,是原样输出
        const fileContent = this.analyzer.analyze(html, this.filePath);
        // 写入文件
        this.writeFile(fileContent);
    }


}

const secret = 'secretKey';
const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;

const analyzer = new LeeAnalyzer();
new Crowller(url, analyzer);
