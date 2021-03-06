import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { WorkItem } from '@/model/WorkItem';

@Component({})
export default class WorkWrapItem extends Vue {
  @Prop()
  private data!: WorkItem;

  // 跳转外部链接
  private openLink(link: string) {
    return window.open(link);
  }

  // 跳转内部链接
  private jumpToWrap(id: string) {
    return this.$router.push({ path: `/workwrap`, query: { id } });
  }

  @Watch('data')
  getWorkData(newVal: WorkItem) {
    this.data = newVal;
  }

  private render() {
    return (
      <article class="work__project--item">
        {/* 图片部分 */}
        <section class="left">
          {/* 根据配置决定图片 */}
          {this.data.avatar ? (
            <img src={this.data.avatar} />
          ) : (
            <img src={require('@/assets/bg.jpg')} />
          )}
        </section>
        {/* 文字部分 */}
        <section class="right">
          <h3 class="item--title">{this.data.title}</h3>
          <p class="item--last-update">最后更新时间：{this.data.lastupdate}</p>
          <ul class="item--tag">
            {this.data.tag?.map(item => {
              return <li>{item}</li>;
            })}
          </ul>
          <p class="item--intro">{this.data.intro}</p>
          <section class="item--button-list">
            {this.data.preview ? (
              <button
                class="mermaid__button live-button"
                onClick={() => this.jumpToWrap(this.data._id)}
              >
                Live Demo
              </button>
            ) : (
              ''
            )}
            {this.data.source ? (
              <button
                class="mermaid__button source-button"
                onClick={() => this.openLink(this.data.source)}
              >
                Source
              </button>
            ) : (
              ''
            )}
          </section>
        </section>
      </article>
    );
  }
}
