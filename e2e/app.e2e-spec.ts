import { AppPage } from './app.po';

describe('angular-voter App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have correct title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Angular Voter');
  });
});
