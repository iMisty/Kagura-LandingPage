import { Component, Vue } from 'vue-property-decorator';
import AdminWrapTitle from '@/components/AdminWrapTitle';
import AdminWorkTable from '@/components/AdminWorkTable';
import MermaidCard from '@/components/MermaidCard';
import { work } from '@/config/work.config';

@Component({
  components: {
    'admin-title': AdminWrapTitle,
    'admin-work-table': AdminWorkTable,
    'm-card': MermaidCard
  }
})
export default class AdminWork extends Vue {
  private title = [
    { key: 'title' },
    { key: 'lastupdate', mobile: 'mobile-type' },
    { key: 'version', mobile: 'mobile-type' },
    { key: 'status' },
    { key: 'link', mobile: 'mobile-type' },
    { key: 'setting' }
  ];

  private data = work.project;

  private render() {
    return (
      <div class="admin__work">
        <admin-title title="Work"></admin-title>
        <div class="admin__work--wrap">
          <div class="content">
            <m-card title="Work">
              <admin-work-table
                title={this.title}
                data={this.data}
              ></admin-work-table>
            </m-card>
          </div>
        </div>
      </div>
    );
  }
}