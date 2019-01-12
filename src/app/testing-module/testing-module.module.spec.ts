import { TestingModuleModule } from './testing-module.module';

describe('TestingModuleModule', () => {
  let testingModuleModule: TestingModuleModule;

  beforeEach(() => {
    testingModuleModule = new TestingModuleModule();
  });

  it('should create an instance', () => {
    expect(testingModuleModule).toBeTruthy();
  });
});
